import fs from 'fs';
import path from 'path';

const sourceDir = '../stitch_razant_nigeria_website_model';
const destDir = './src/pages';

const pages = [
  { dir: 'about_razant_services_limited', name: 'About.jsx' },
  { dir: 'contact_razant_nigeria_oil_gas_support', name: 'Contact.jsx' },
  { dir: 'energy_project_portfolio', name: 'Portfolio.jsx' },
  { dir: 'get_a_quote_razant_nigeria_limited', name: 'GetAQuote.jsx' },
  { dir: 'oilfield_services_razant_nigeria', name: 'OilfieldServices.jsx' },
  { dir: 'our_services_razant_services_limited', name: 'OurServices.jsx' },
  { dir: 'pipeline_integrity_razant_nigeria', name: 'PipelineIntegrity.jsx' },
  { dir: 'privacy_policy_razant_nigeria_limited', name: 'PrivacyPolicy.jsx' },
  { dir: 'razant_civil_engineering_system', name: 'CivilEngineering.jsx' },
  { dir: 'terms_of_service_razant_nigeria_limited', name: 'TermsOfService.jsx' },
];

for (const page of pages) {
  const codePath = path.join(sourceDir, page.dir, 'code.html');
  if (!fs.existsSync(codePath)) continue;
  
  let html = fs.readFileSync(codePath, 'utf8');
  
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  if (!bodyMatch) continue;
  let bodyContent = bodyMatch[1];
  
  // Remove top header/nav
  bodyContent = bodyContent.replace(/<!-- TopNavBar -->[\s\S]*?<\/header>/, '');
  bodyContent = bodyContent.replace(/<!-- TopNavBar -->[\s\S]*?<\/nav>/, '');
  bodyContent = bodyContent.replace(/<header class="w-full top-0 sticky[^>]*>[\s\S]*?<\/header>/, '');
  
  // Remove footer
  bodyContent = bodyContent.replace(/<!-- Footer -->[\s\S]*?<footer[^>]*>[\s\S]*?<\/footer>/, '');
  bodyContent = bodyContent.replace(/<footer class="w-full mt-auto[^>]*>[\s\S]*?<\/footer>/, '');
  
  // Remove scripts and snapdom sandbox
  bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/g, '');
  bodyContent = bodyContent.replace(/<div id="snapdom-sandbox"[^>]*><\/div>/, '');
  
  // Convert to JSX
  let jsx = bodyContent
    .replace(/\bclass=/g, 'className=')
    .replace(/\bfor=/g, 'htmlFor=')
    .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
    // Fix specific unclosed inputs if they had trailing spaces, e.g. <input type="text" >
    .replace(/<input([^>]*?)\s*>/g, '<input$1 />')
    .replace(/<textarea([^>]*?)\s*>\s*<\/textarea>/g, '<textarea$1 />')
    // Fix image paths
    .replace(/style="background-image: url\('([^']+)'\)[^"]*"/g, "style={{backgroundImage: `url('$1')`}}")
    .replace(/style="([^"]+)"/g, (match, p1) => {
      if (p1.includes('background-image: url(')) {
          const urlMatch = p1.match(/url\('([^']+)'\)/);
          if (urlMatch) {
              return `style={{backgroundImage: "url('${urlMatch[1]}')"}}`;
          }
      }
      return match;
    });

  const componentCode = `import { Link } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ${page.name.replace('.jsx', '')}() {
  useFadeIn();

  return (
    <>
      <Navbar />
      ${jsx.trim()}
      <Footer />
    </>
  );
}
`;
  
  fs.writeFileSync(path.join(destDir, page.name), componentCode);
}
console.log('Conversion complete!');

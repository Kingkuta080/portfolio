export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ubaidullah Abdullah</h3>
            <p className="text-gray-300">
              Web Developer specializing in creating elegant, user-friendly solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/kingkuta080" className="footer-link">GitHub</a></li>
              <li><a href="https://linkedin.com/in/johndoe" className="footer-link">LinkedIn</a></li>
              <li><a href="https://twitter.com/yourusername" className="footer-link">Twitter</a></li>
              <li><a href="mailto:Alubiadullahi080@gmail.com" className="footer-link">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Ubaidullah Abdullah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
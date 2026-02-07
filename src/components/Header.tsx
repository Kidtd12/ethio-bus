import { Link } from 'react-router-dom';
import { Bus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logoEt from '../asset/logo et.png';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-gradient-to-r from-green-900 via-green-800 to-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
          <Bus size={36} className="text-green-200" />
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-3xl font-bold">{t('appName')}</h1>
              <img
                src={logoEt}
                alt="ET logo"
                className="h-8 w-8 rounded-full bg-white/15 border border-white/30 p-1"
              />
            </div>
            <p className="text-green-100 text-sm">{t('tagline')}</p>
          </div>
        </Link>
        <div>
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value as 'en' | 'am' | 'om')}
            className="rounded-lg border border-white/30 bg-green-600/90 px-4 py-2 text-sm font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-green-200"
          >
            <option value="en">{t('english')}</option>
            <option value="am">{t('amharic')}</option>
            <option value="om">{t('oromo')}</option>
          </select>
        </div>
      </div>
    </header>
  );
}

import { Link } from 'react-router-dom';
import { Bus, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-gradient-to-r from-green-950 via-green-800 to-green-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Bus size={32} className="text-green-200" />
              <div>
                <h3 className="text-xl font-bold">{t('appName')}</h3>
                <p className="text-sm text-green-100">{t('footerTagline')}</p>
              </div>
            </div>
            <p className="text-sm text-green-100/90">
              {t('footerBuilt')}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-green-200 mb-4">
              {t('footerLinks')}
            </h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/" className="hover:text-amber-200 transition-colors">
                {t('heroTitle')}
              </Link>
              <Link to="/" className="hover:text-amber-200 transition-colors">
                {t('searchFilter')}
              </Link>
              <Link to="/" className="hover:text-amber-200 transition-colors">
                {t('favorites')}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-green-200 mb-4">
              {t('footerContact')}
            </h4>
            <div className="space-y-3 text-sm text-green-100/90">
              <div className="flex items-center space-x-2 rounded-lg px-2 py-1 hover:bg-white/10 transition-colors">
                <Phone size={16} className="text-green-200" />
                <span>+251 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 rounded-lg px-2 py-1 hover:bg-white/10 transition-colors">
                <Mail size={16} className="text-green-200" />
                <span>support@ethiobus.et</span>
              </div>
              <div className="flex items-center space-x-2 rounded-lg px-2 py-1 hover:bg-white/10 transition-colors">
                <MapPin size={16} className="text-green-200" />
                <span>{t('ethiopiaLocation')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-green-100/80 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span>© {year} {t('appName')} — {t('footerRights')}</span>
          <span>{t('footerSupport')}</span>
        </div>
      </div>
    </footer>
  );
}

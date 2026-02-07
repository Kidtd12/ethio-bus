import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Phone, MapPin, CheckCircle, Route } from 'lucide-react';
import { busCompanies } from '../data/busCompanies';
import { useLanguage } from '../context/LanguageContext';
import allbusVideo from '../asset/allbus.mp4';

export default function BusDetail() {
  const { t, language, translateCity, translateFeature, translateRoute } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const bus = busCompanies.find(b => b.id === id);

  if (!bus) {
    return <Navigate to="/" replace />;
  }

  const shortDescription =
    language === 'am'
      ? bus.shortDescriptionAm ?? bus.shortDescription
      : language === 'om'
      ? bus.shortDescriptionOm ?? bus.shortDescriptionAm ?? bus.shortDescription
      : bus.shortDescription;

  const fullDescription =
    language === 'am'
      ? bus.fullDescriptionAm ?? bus.fullDescription
      : language === 'om'
      ? bus.fullDescriptionOm ?? bus.fullDescriptionAm ?? bus.fullDescription
      : bus.fullDescription;

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={allbusVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-white hover:text-green-300 transition-colors mb-4 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm"
            >
              <ArrowLeft size={20} />
              <span>{t('backToList')}</span>
            </Link>
            <h1 className="text-5xl font-bold text-white mb-2">{bus.name}</h1>
            <p className="text-xl text-gray-200">{shortDescription}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-1 h-8 bg-green-900 mr-3 rounded-full"></span>
                {t('about')} {bus.name}
              </h2>
              <p className="text-gray-700 leading-relaxed">{fullDescription}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Route size={28} className="text-green-600 mr-3" />
                {t('popularRoutes')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {bus.routes.map((route, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-900"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-green-900 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium">{translateRoute(route)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle size={28} className="text-green-600 mr-3" />
                {t('amenities')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {bus.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <CheckCircle size={18} className="text-green-700 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{translateFeature(feature)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-950 via-green-800 to-green-600 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6">{t('contactInfo')}</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 rounded-lg p-2 hover:bg-white/10 transition-colors">
                  <Phone size={20} className="text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-green-100 mb-1">{t('phone')}</p>
                    <a
                      href={`tel:${bus.phone}`}
                      className="text-white hover:text-green-200 transition-colors font-medium"
                    >
                      {bus.phone}
                    </a>
                  </div>
                </div>

                <div className="border-t border-green-400/40 my-4"></div>

                <div className="rounded-lg p-2 hover:bg-white/10 transition-colors">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin size={20} className="text-green-200" />
                    <p className="text-sm text-green-100">{t('locationsServed')}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bus.locations.map((location, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm hover:bg-white/20 transition-colors"
                      >
                        {translateCity(location)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to={`/booking/${bus.id}`}
                className="block w-full mt-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors text-center"
              >
                {t('bookNow')}
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">{t('quickFacts')}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('routes')}:</span>
                  <span className="font-semibold text-gray-800">{bus.routes.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('citiesServed')}:</span>
                  <span className="font-semibold text-gray-800">{bus.locations.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('features')}:</span>
                  <span className="font-semibold text-gray-800">{bus.features.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

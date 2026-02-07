import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { BusCompany } from '../types/Bus';
import { useLanguage } from '../context/LanguageContext';


interface BusCardProps {
  bus: BusCompany;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
  alertMessage?: string | null;
}

export default function BusCard({ bus, isFavorite = false, onToggleFavorite, alertMessage }: BusCardProps) {
  const { t, language, translateCity, translateFeature } = useLanguage();
  const shortDescription =
    language === 'am'
      ? bus.shortDescriptionAm ?? bus.shortDescription
      : language === 'om'
      ? bus.shortDescriptionOm ?? bus.shortDescriptionAm ?? bus.shortDescription
      : bus.shortDescription;
  const locationPreview = bus.locations.slice(0, 3).map(translateCity).join(', ');

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-green-100 hover:border-green-400 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img
          src={bus.image}
          alt={bus.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {bus.name}
        </h3>
        {onToggleFavorite && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite(bus.id);
            }}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <Star
              size={20}
              className={isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
            />
          </button>
        )}
      </div>

      <div className="p-5">
        <p className="text-gray-600 mb-4 line-clamp-2">
          {shortDescription}
        </p>

        {alertMessage && (
          <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
            {alertMessage}
          </div>
        )}

        <div className="flex items-start space-x-2 mb-4">
          <MapPin size={18} className="text-green-600 mt-1 flex-shrink-0" />
          <p className="text-sm text-gray-700">
            {locationPreview}
            {bus.locations.length > 3 && ` +${bus.locations.length - 3} ${t('more')}`}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {bus.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-green-50 text-green-800 text-xs rounded-full"
            >
              {translateFeature(feature)}
            </span>
          ))}
        </div>

        <Link
          to={`/bus/${bus.id}`}
          className="block w-full py-3 text-center bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white rounded-lg hover:from-green-800 hover:to-green-600 transition-all duration-300 font-semibold"
        >
          {t('viewDetails')}
        </Link>
      </div>
    </div>
  );
}

import { useState, useEffect, useMemo } from 'react';
import { Search, MapPin, Moon, Sun, Heart } from 'lucide-react';
import BusCard from '../components/BusCard';
import { busCompanies } from '../data/busCompanies';
import { useLanguage } from '../context/LanguageContext';
import etHeder from '../asset/etHeder.png';


export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeparture, setSelectedDeparture] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { t, translateCity } = useLanguage();

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const normalizeCity = (city: string) => city.replace(' (Merkato)', '');

  const allDestinations = useMemo(() => {
    const destinations = new Set<string>();
    busCompanies.forEach(bus => {
      bus.locations.forEach(location => destinations.add(normalizeCity(location)));
    });
    return Array.from(destinations).sort();
  }, []);

  const filteredBuses = useMemo(() => {
    let filtered = busCompanies;

    if (searchQuery) {
      filtered = filtered.filter(bus =>
        bus.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bus.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (showFavoritesOnly) {
      filtered = filtered.filter(bus => favorites.includes(bus.id));
    }

    return filtered;
  }, [searchQuery, showFavoritesOnly, favorites]);

  const getRouteAlert = (busId: string) => {
    if (!selectedDeparture && !selectedDestination) {
      return null;
    }

    if (selectedDeparture && selectedDestination && selectedDeparture === selectedDestination) {
      return t('sameCityError');
    }

    const bus = busCompanies.find(item => item.id === busId);
    if (!bus) {
      return null;
    }

    const normalizedLocations = bus.locations.map(location => normalizeCity(location));

    if (selectedDeparture && !normalizedLocations.includes(selectedDeparture)) {
      return t('departureNotServed');
    }

    if (selectedDestination && !normalizedLocations.includes(selectedDestination)) {
      return t('destinationNotServed');
    }

    return null;
  };

  const priceResults = useMemo(() => {
    if (!selectedDeparture || !selectedDestination || !selectedDate || selectedDeparture === selectedDestination) {
      return [];
    }

    return filteredBuses.map(bus => {
      const normalizedLocations = bus.locations.map(location => normalizeCity(location));
      const servesRoute = normalizedLocations.includes(selectedDeparture) && normalizedLocations.includes(selectedDestination);
      const matchedFare = servesRoute
        ? bus.fares.find(
            fare =>
              (fare.from === selectedDeparture && fare.to === selectedDestination) ||
              (fare.from === selectedDestination && fare.to === selectedDeparture)
          )
        : undefined;

      return {
        bus,
        servesRoute,
        price: matchedFare?.price ?? null,
        seatsAvailable: matchedFare?.seatsAvailable ?? null
      };
    });
  }, [filteredBuses, selectedDeparture, selectedDestination, selectedDate]);

  const toggleFavorite = (id: string) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-950' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-8">
        <div
          className={`relative overflow-hidden rounded-3xl border mb-10 bg-cover bg-center ${darkMode ? 'border-slate-800' : 'border-green-200'}`}
          style={{ backgroundImage: `url(${etHeder})` }}
        >
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-green-700 via-green-500 to-green-600" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#22c55e_0%,_transparent_55%)]" />
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-gradient-to-br from-green-400/30 via-green-300/30 to-green-200/30 blur-3xl" />
          <div className="relative p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className={`text-xs uppercase tracking-[0.4em] ${darkMode ? 'text-white' : 'text-black'}`}>
                  {t('ethiopianTransitNetwork')}
                </p>
                <h2 className={`text-3xl md:text-4xl font-bold mt-2 ${darkMode ? 'text-slate-50' : 'text-slate-900'}`}>
                  {t('heroTitle')}
                </h2>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  {t('heroSubtitle')}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[t('safetyFirst'), t('modernFleet'), t('nationwideRoutes')].map(tag => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${darkMode ? 'bg-slate-800 text-green-200' : 'bg-green-100 text-green-800'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    showFavoritesOnly
                      ? 'bg-rose-600 text-white'
                      : darkMode
                      ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                      : 'bg-white text-slate-700 hover:bg-green-50'
                  } shadow-md`}
                >
                  <Heart size={20} className={showFavoritesOnly ? 'fill-white' : ''} />
                  <span>{showFavoritesOnly ? t('showAll') : t('favorites')}</span>
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-3 rounded-lg transition-colors shadow-md ${
                    darkMode
                      ? 'bg-slate-800 text-green-300 hover:bg-slate-700'
                      : 'bg-white text-green-900 hover:bg-green-50'
                  }`}
                >
                  {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
              {t('searchFilter')}
            </h2>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
              {t('narrowBy')}
            </p>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {t('nationwide')}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`} size={20} />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-400/70 transition-all ${
                darkMode
                  ? 'bg-slate-900 text-white placeholder-slate-400'
                  : 'bg-white text-slate-800 placeholder-slate-500'
              }`}
            />
          </div>

          <div className="relative">
            <MapPin className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`} size={20} />
            <select
              value={selectedDeparture}
              onChange={(e) => setSelectedDeparture(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-400/70 transition-all appearance-none ${
                darkMode
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-800'
              }`}
            >
              <option value="">{t('allDepartures')}</option>
              {allDestinations.map(dest => (
                <option key={`from-${dest}`} value={dest}>{translateCity(dest)}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <MapPin className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`} size={20} />
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400/70 transition-all appearance-none ${
                darkMode
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-800'
              }`}
            >
              <option value="">{t('allDestinations')}</option>
              {allDestinations.map(dest => (
                <option key={dest} value={dest}>{translateCity(dest)}</option>
              ))}
            </select>
          </div>
        </div>

        <div
          className={`relative overflow-hidden rounded-3xl border mb-8 ${
            darkMode
              ? 'border-emerald-900/60 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950'
              : 'border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60'
          }`}
        >
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.3),_transparent_55%)]" />
          <div className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-emerald-400/30 blur-2xl" />
          <div className="relative p-6 md:p-7">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className={`text-xs uppercase tracking-[0.35em] ${darkMode ? 'text-emerald-200' : 'text-emerald-800'}`}>
                  {t('priceCheckTitle')}
                </p>
                <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {t('priceCheckSubtitle')}
                </h3>
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                  darkMode
                    ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200'
                    : 'border-emerald-300 bg-emerald-100/70 text-emerald-800'
                }`}
              >
                {t('currencyLabel')}
              </span>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div>
                <label className={`block text-xs font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {t('departureDate')}
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className={`w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-emerald-500/70 transition-all accent-emerald-600 ${
                    darkMode
                      ? 'bg-slate-900/60 border-emerald-900/60 text-white'
                      : 'bg-white border-emerald-200 text-slate-800'
                  }`}
                />
              </div>
              <div className={`rounded-2xl border px-4 py-3 ${darkMode ? 'border-emerald-900/60 bg-slate-900/60' : 'border-emerald-200 bg-emerald-50/60'}`}>
                <p className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {t('routes')}
                </p>
                <p className={`mt-1 text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {selectedDeparture && selectedDestination
                    ? `${translateCity(selectedDeparture)} → ${translateCity(selectedDestination)}`
                    : t('selectBothCities')}
                </p>
              </div>
            </div>

            <div className="mt-5">

          {!selectedDeparture || !selectedDestination || !selectedDate ? (
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {t('selectCitiesAndDate')}
            </p>
          ) : selectedDeparture === selectedDestination ? (
            <p className={`text-sm ${darkMode ? 'text-rose-300' : 'text-rose-600'}`}>
              {t('sameCityError')}
            </p>
          ) : (
            <div className="grid gap-3">
              {priceResults.map(result => (
                <div
                  key={result.bus.id}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 border ${
                    darkMode
                      ? 'border-slate-800 bg-slate-900/80'
                      : 'border-emerald-100 bg-white shadow-[0_6px_18px_rgba(16,185,129,0.08)]'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {result.bus.name}
                    </span>
                    <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {translateCity(selectedDeparture)} → {translateCity(selectedDestination)}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                      {t('dateLabel')}: {selectedDate}
                    </span>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-sm font-semibold ${
                        result.servesRoute
                          ? darkMode
                            ? 'text-emerald-300'
                            : 'text-emerald-700'
                          : darkMode
                          ? 'text-slate-500'
                          : 'text-slate-500'
                      }`}
                    >
                      {result.servesRoute
                        ? result.price !== null
                          ? `ETB ${result.price.toLocaleString()}`
                          : t('noPriceAvailable')
                        : t('routeNotServed')}
                    </div>
                    {result.servesRoute && result.seatsAvailable !== null && (
                      <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-emerald-700'}`}>
                        {t('seatsAvailableLabel')}: {result.seatsAvailable}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
            </div>
          </div>
        </div>

        {filteredBuses.length === 0 ? (
          <div className={`text-center py-16 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="text-xl">{t('noResults')}</p>
          </div>
        ) : (
          <>
            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('showing')} {filteredBuses.length} {filteredBuses.length === 1 ? t('company') : t('companies')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBuses.map(bus => (
                <BusCard
                  key={bus.id}
                  bus={bus}
                  isFavorite={favorites.includes(bus.id)}
                  onToggleFavorite={toggleFavorite}
                  alertMessage={getRouteAlert(bus.id)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

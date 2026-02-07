import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { ArrowLeft, Users, MapPin, CreditCard, Check } from 'lucide-react';
import { useState } from 'react';
import { busCompanies } from '../data/busCompanies';
import { useLanguage } from '../context/LanguageContext';

export default function Booking() {
  const { t, language, translateCity } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const bus = busCompanies.find(b => b.id === id);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    seats: [] as number[],
    paymentMethod: '',
  });
  const [bookingComplete, setBookingComplete] = useState(false);
  const [smsStatus, setSmsStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [smsPreview, setSmsPreview] = useState('');
  const [formError, setFormError] = useState('');

  if (!bus) {
    return <Navigate to="/" replace />;
  }

  const shortDescription =
    language === 'am'
      ? bus.shortDescriptionAm ?? bus.shortDescription
      : language === 'om'
      ? bus.shortDescriptionOm ?? bus.shortDescriptionAm ?? bus.shortDescription
      : bus.shortDescription;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'passengers' ? parseInt(value) : value
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    let digits = raw.replace(/\D/g, '');

    if (digits.startsWith('0')) {
      digits = `251${digits.slice(1)}`;
    } else if (digits.startsWith('9') || digits.startsWith('7')) {
      digits = `251${digits}`;
    }

    if (!digits.startsWith('251')) {
      digits = digits.slice(0, 12);
    }

    const normalized = digits ? `+${digits.slice(0, 12)}` : '';

    if (
      normalized === '' ||
      normalized === '+251' ||
      normalized === '+2517' ||
      normalized === '+2519' ||
      /^\+251[79]\d*$/.test(normalized)
    ) {
      setFormData(prev => ({
        ...prev,
        phone: normalized
      }));
    }
  };

  const toggleSeat = (seatNumber: number) => {
    setFormData(prev => ({
      ...prev,
      seats: prev.seats.includes(seatNumber)
        ? prev.seats.filter(s => s !== seatNumber)
        : [...prev.seats, seatNumber].slice(0, formData.passengers)
    }));
  };

  const handlePaymentMethodChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: value
    }));
  };

  const sendSms = () => {
    if (!formData.phone) {
      return;
    }

    const fromLabel = translateCity(formData.from);
    const toLabel = translateCity(formData.to);
    const message = language === 'om'
      ? `Ethio Bus: Qabannaan mirkanaa'e ${formData.firstName} ${formData.lastName}. ` +
        `Daandii ${fromLabel} → ${toLabel} guyyaa ${formData.date}. ` +
        `Teessoo ${formData.seats.join(', ')}. Waliigala ETB ${totalPrice}. Kaffaltii: ${formData.paymentMethod || 'Pending'}.`
      : `Ethio Bus: Booking confirmed for ${formData.firstName} ${formData.lastName}. ` +
        `Route ${fromLabel} → ${toLabel} on ${formData.date}. ` +
        `Seats ${formData.seats.join(', ')}. Total ETB ${totalPrice}. Payment: ${formData.paymentMethod || 'Pending'}.`;

    setSmsStatus('sending');
    setSmsPreview(message);
    setTimeout(() => {
      setSmsStatus('sent');
    }, 800);

    const smsLink = `sms:${formData.phone}?body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  };

  const paymentMethods = [
    { name: 'Tele Birr', logo: 'TB', color: 'bg-red-100 text-red-700' },
    { name: 'CBE Birr', logo: 'CBE', color: 'bg-green-100 text-green-700' },
    { name: 'Abyssinia App', logo: 'AB', color: 'bg-blue-100 text-blue-700' },
    { name: 'Amole', logo: 'AM', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'M-Birr', logo: 'MB', color: 'bg-purple-100 text-purple-700' }
  ];

  const allCities = Array.from(
    new Set(
      busCompanies.flatMap(company =>
        company.locations.map(location => location.replace(' (Merkato)', ''))
      )
    )
  ).sort((a, b) => a.localeCompare(b));

  const destinationCities = allCities.filter(
    city =>
      city !== formData.from &&
      !city.includes('Sudan') &&
      !city.includes('Kenya') &&
      !city.includes('Djibouti')
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && formData.from && formData.to && formData.date && formData.passengers) {
      setFormError('');
      setStep(2);
    } else if (step === 2 && formData.firstName && formData.lastName && formData.email && formData.phone) {
      setFormError('');
      setStep(3);
    } else if (step === 3 && formData.seats.length === formData.passengers) {
      setFormError('');
      setStep(4);
    } else {
      if (step === 1) {
        setFormError(t('tripDetailsError'));
      } else if (step === 2) {
        setFormError(t('passengerDetailsError'));
      } else if (step === 3) {
        setFormError(t('seatError'));
      }
    }
  };

  const completeBooking = () => {
    sendSms();
    setBookingComplete(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const totalPrice = formData.passengers * 850;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(`/bus/${id}`)}
          className="inline-flex items-center space-x-2 text-gray-700 hover:text-green-700 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>{t('back')}</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100">
              <div className="relative bg-gradient-to-r from-green-900 via-green-700 to-green-600 p-10 text-white">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ffffff_0%,_transparent_55%)]" />
                <div className="relative flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg">
                    <span className="text-2xl font-bold">🚌</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">{t('ethiopianExpress')}</p>
                    <h1 className="text-3xl font-bold">{bus.name}</h1>
                    <p className="text-white/90">{t('bookJourney')}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between mb-8">
                  {[1, 2, 3, 4].map(s => (
                    <div key={s} className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold mb-2 transition-all ${
                          step >= s
                            ? 'bg-gradient-to-r from-green-700 to-green-500 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {s === 4 ? <Check size={24} /> : s}
                      </div>
                      <span className="text-xs text-gray-600 text-center">
                        {s === 1 ? t('trip') : s === 2 ? t('details') : s === 3 ? t('seats') : t('payment')}
                      </span>
                    </div>
                  ))}
                </div>

                {bookingComplete ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={48} className="text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('bookingConfirmed')}</h2>
                    <p className="text-gray-600 mb-4">{t('bookingThanks')}</p>
                    <p className="text-sm text-gray-500">{t('redirecting')}</p>
                  </div>
                ) : step === 1 ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('selectRoute')}</h2>
                    {formError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                        {formError}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('from')}</label>
                        <select
                          name="from"
                          value={formData.from}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                        >
                          <option value="">{t('allDepartures')}</option>
                          {allCities.map(city => (
                            <option key={city} value={city}>{translateCity(city)}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('to')}</label>
                        <select
                          name="to"
                          value={formData.to}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                        >
                          <option value="">{t('allDestinations')}</option>
                          {destinationCities.map(city => (
                            <option key={city} value={city}>{translateCity(city)}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('departureDate')}</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/60 accent-emerald-600"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('passengers')}</label>
                        <select
                          name="passengers"
                          value={formData.passengers}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                        >
                          {[1, 2, 3, 4, 5, 6].map(n => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
                    >
                      {t('continue')}
                    </button>
                  </form>
                ) : step === 2 ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('passengerDetails')}</h2>
                    {formError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                        {formError}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('firstName')}</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                          placeholder={t('firstNamePlaceholder')}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('lastName')}</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                          placeholder={t('lastNamePlaceholder')}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('email')}</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                          placeholder={t('emailPlaceholder')}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('phoneLabel')}</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          inputMode="numeric"
                          maxLength={13}
                          pattern="^\+251[79]\d{8}$"
                          title="Use Ethiopian format: +251 9xxxxxxxx or +251 7xxxxxxxx"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                          placeholder="+2519XXXXXXXX"
                        />
                        <p className="text-xs text-gray-500 mt-2">{t('phoneFormatHint')}</p>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-4 border-2 border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-50 transition-all"
                      >
                        {t('back')}
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-4 bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
                      >
                        {t('selectSeatsButton')}
                      </button>
                    </div>
                  </form>
                ) : step === 3 ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('selectSeats')} ({formData.seats.length}/{formData.passengers})</h2>
                    {formError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-4 gap-3 p-6 bg-gray-100 rounded-2xl">
                      {Array.from({ length: 32 }, (_, i) => i + 1).map(seat => (
                        <button
                          key={seat}
                          type="button"
                          onClick={() => toggleSeat(seat)}
                          className={`aspect-square rounded-lg font-bold transition-all ${
                            formData.seats.includes(seat)
                              ? 'bg-green-700 text-white scale-105 shadow-lg'
                              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                          }`}
                        >
                          {seat}
                        </button>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 py-4 border-2 border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-50 transition-all"
                      >
                        {t('back')}
                      </button>
                      <button
                        type="submit"
                        disabled={formData.seats.length !== formData.passengers}
                        className={`flex-1 py-4 font-bold rounded-lg transition-all ${
                          formData.seats.length === formData.passengers
                            ? 'bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-white hover:shadow-xl'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {t('reviewPayment')}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('bookingSummary')}</h2>

                    <div className="space-y-4 p-6 bg-gray-50 rounded-2xl">
                      <div className="flex justify-between">
                        <span className="text-gray-700">{t('busLabel')}:</span>
                        <span className="font-bold text-gray-900">{bus.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">{t('routeLabel')}:</span>
                        <span className="font-bold text-gray-900">{translateCity(formData.from)} → {translateCity(formData.to)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">{t('dateLabel')}:</span>
                        <span className="font-bold text-gray-900">{formData.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">{t('passengersLabel')}:</span>
                        <span className="font-bold text-gray-900">{formData.passengers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">{t('seatsLabel')}:</span>
                        <span className="font-bold text-gray-900">{formData.seats.join(', ')}</span>
                      </div>
                      <div className="border-t border-gray-300 pt-4 flex justify-between">
                        <span className="text-lg font-bold text-gray-700">{t('total')}:</span>
                        <span className="text-2xl font-bold text-green-600">ETB {totalPrice}</span>
                      </div>
                    </div>

                      <div className="space-y-4 p-6 bg-white rounded-2xl border-2 border-green-100">
                        <div className="flex items-center space-x-2">
                          <CreditCard size={18} className="text-green-700" />
                          <h3 className="font-bold text-gray-800">{t('choosePayment')}</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {paymentMethods.map(method => (
                            <label
                              key={method.name}
                              className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                formData.paymentMethod === method.name
                                  ? 'border-green-500 bg-green-50'
                                  : 'border-gray-200 hover:border-green-300'
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <span className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${method.color}`}>
                                  {method.logo}
                                </span>
                                <span className="font-semibold text-gray-800">{method.name}</span>
                              </div>
                              <input
                                type="radio"
                                name="paymentMethod"
                                value={method.name}
                                checked={formData.paymentMethod === method.name}
                                onChange={() => handlePaymentMethodChange(method.name)}
                                className="h-4 w-4 text-green-600"
                              />
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg space-y-3">
                        <p className="text-sm text-gray-700">
                          <span className="font-bold">{t('smsConfirmation')}</span> {t('smsInstruction')}
                        </p>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={sendSms}
                            className="px-4 py-2 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition-all"
                          >
                            {smsStatus === 'sending' ? t('sending') : smsStatus === 'sent' ? t('smsSent') : t('sendSms')}
                          </button>
                          <a
                            href={formData.phone ? `sms:${formData.phone}?body=${encodeURIComponent(smsPreview)}` : undefined}
                            className={`px-4 py-2 font-bold rounded-lg transition-all ${
                              formData.phone
                                ? 'bg-white text-blue-700 border border-blue-300 hover:bg-blue-50'
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                            onClick={event => {
                              if (!formData.phone) {
                                event.preventDefault();
                              }
                            }}
                          >
                            {t('openSms')}
                          </a>
                          <span className="text-sm text-gray-600">{t('to')}: {formData.phone || t('addPhoneHint')}</span>
                        </div>
                        {smsPreview && (
                          <div className="text-xs text-gray-600 bg-white rounded-lg p-3 border border-blue-200">
                            {smsPreview}
                          </div>
                        )}
                      </div>

                    <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <span className="font-bold">{t('paymentNote')}</span> {t('paymentNoteBody')}
                      </p>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={() => setStep(3)}
                        className="flex-1 py-4 border-2 border-gray-300 text-gray-800 font-bold rounded-lg hover:bg-gray-50 transition-all"
                      >
                        {t('back')}
                      </button>
                      <button
                        onClick={completeBooking}
                        disabled={!formData.paymentMethod}
                        className="flex-1 py-4 bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                      >
                        {t('confirmBooking')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-3xl shadow-2xl p-6 border border-green-100 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-green-200/40 rounded-full blur-3xl" />
                <div className="w-full h-32 bg-gradient-to-r from-green-900 via-green-700 to-green-600 rounded-2xl mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-5xl">🚌</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{bus.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{shortDescription}</p>

                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin size={16} className="text-green-600" />
                    <span className="text-gray-700">{bus.locations.length} {t('citiesServed')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users size={16} className="text-blue-600" />
                    <span className="text-gray-700">{bus.features.length} {t('premiumFeatures')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 border border-green-200">
                <h4 className="font-bold text-gray-800 mb-4">{t('ethiopianPride')}</h4>
                <p className="text-sm text-gray-700 mb-3">
                  {t('prideBody')}
                </p>
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-green-700"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

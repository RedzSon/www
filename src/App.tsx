import React, { useState } from 'react';
import { Car, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    accidentDate: '',
    insuranceCompany: '',
    policyNumber: '',
    carType: 'economy',
    message: '',
    accidentPlace: '',
    culpritRegistrationNumber: '',
    culpritCar: '',
    statementRecorded: '',
    policeInvolved: '',
    registrationDetained: '',
    vehicleTowed: '',
    airbagsDeployed: '',
    leased: '',
    privateVehicle: '',
    // Dane Właściciela Pojazdu
    ownerName: '',
    postalCode: '',
    city: '',
    street: '',
    houseNumber: '',
    voivodeship: '',
    pesel: '',
    ownerPhone: '',
    ownerEmail: '',
    // Nowe pole: Opis zdarzenia
    incidentDescription: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Przykładowa walidacja: sprawdzamy, czy pola wymagane (np. imię, email, telefon) są wypełnione
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Proszę uzupełnić wszystkie wymagane pola.'
      });
      return;
    }

    // Tu zwykle wysyłamy dane do serwera lub używamy EmailJS, żeby wysłać e-mail
    console.log('Form submitted:', formData);
    // Dane zostaną wysłane na: tomasz.cabaj@gmail.com

    setFormStatus({
      submitted: true,
      error: false,
      message:
        'Dziękujemy! Twoje zgłoszenie zostało wysłane. Wkrótce się z Tobą skontaktujemy.'
    });

    // Reset formularza
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      accidentDate: '',
      insuranceCompany: '',
      policyNumber: '',
      carType: 'economy',
      message: '',
      accidentPlace: '',
      culpritRegistrationNumber: '',
      culpritCar: '',
      statementRecorded: '',
      policeInvolved: '',
      registrationDetained: '',
      vehicleTowed: '',
      airbagsDeployed: '',
      leased: '',
      privateVehicle: '',
      ownerName: '',
      postalCode: '',
      city: '',
      street: '',
      houseNumber: '',
      voivodeship: '',
      pesel: '',
      ownerPhone: '',
      ownerEmail: '',
      incidentDescription: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Car size={32} />
            <h1 className="text-2xl font-bold">I jedziesz dalej</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#services" className="hover:underline">
                  Czym się zajmujemy
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:underline">
                  Jak to działa
                </a>
              </li>
              <li>
                <a href="#request-form" className="hover:underline font-bold">
                  Zamówienie samochodu
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            opacity: 0.3
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Z Nami Szybko Wrócisz na Drogę
          </h2>
          <p className="text-xl text-center max-w-3xl mb-8">
            Zapewniamy pojazdy zastępcze z polisy sprawcy, dzięki czemu nic nie płacisz.
          </p>
          <a
            href="#request-form"
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition duration-300"
          >
            Zamów samochód zastępczy
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Czym się zajmujemy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Car className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Samochody zastępcze z OC sprawcy
              </h3>
              <p className="text-gray-700">
                Załatwiamy wszystkie formalności z firmą ubezpieczeniową, więc nie musisz
                płacić z własnej kieszeni.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <CheckCircle className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Szybka dostawa</h3>
              <p className="text-gray-700">
                Dostarczamy samochody zastępcze w ciągu 24h od zgłoszenia.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <MapPin className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Krajowy zasięg</h3>
              <p className="text-gray-700">
                Nasza usługa jest dostępna w całym kraju, zapewniając ochronę niezależnie od tego,
                gdzie się znajdujesz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accident Help Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img
                src="https://media.istockphoto.com/id/1408564727/pl/zdj%C4%99cie/uszkodzony-w-ci%C4%99%C5%BCkich-pojazdach-samochodowych-po-kolizji-na-miejscu-wypadku-na-ulicy-miasta.jpg?s=1024x1024&w=is&k=20&c=EzOK_oHlQNscYFREK8_lDYmDvMmcergBY8dAbprCJTw="
                alt="Car accident scene"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Miałeś wypadek? Jesteśmy tutaj, by Ci pomóc
              </h2>
              <p className="text-gray-700 mb-4">
                Wypadki są stresujące. Z nami nie musisz się o nic martwić. Nasz zespół
                specjalizuje się w szybkim dostarczaniu pojazdów zastępczych z polisą sprawcy.
              </p>
              <p className="text-gray-700 mb-6">
                Rozumiemy wyzwania, przed którymi stoisz, i pracujemy pilnie, aby przywrócić Cię
                na drogę przy minimalnym wysiłku.
              </p>
              <a
                href="#request-form"
                className="bg-blue-700 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-800 transition duration-300 inline-block"
              >
                Uzyskaj samochód zastępczy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Jak to działa</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start mb-10">
              <div className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Prześlij zapytanie</h3>
                <p className="text-gray-700">
                  Wypełnij nasz prosty formularz, podając swoje dane i informacje o wypadku.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start mb-10">
              <div className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Kontaktujemy się z ubezpieczycielem</h3>
                <p className="text-gray-700">
                  Nasz zespół zajmuje się całą komunikacją z firmą ubezpieczeniową, aby pokryć koszty
                  związane z samochodem zastępczym.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start mb-10">
              <div className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Uzyskaj samochód zastępczy</h3>
                <p className="text-gray-700">
                  Po zatwierdzeniu, dostarczamy samochód zastępczy do wybranego przez Ciebie miejsca.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start">
              <div className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Zwróć, gdy Twój samochód będzie gotowy</h3>
                <p className="text-gray-700">
                  Zatrzymaj samochód do czasu naprawy własnego pojazdu, a następnie po prostu zwróć go do nas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section id="request-form" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Zamów samochód zastępczy</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            Wypełnij poniższy formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin w celu
            zorganizowania pojazdu zastępczego.
          </p>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            {formStatus.submitted ? (
              <div className="text-center py-8">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Zgłoszenie wysłane!</h3>
                <p className="text-gray-700 mb-6">{formStatus.message}</p>
                <button
                  onClick={() =>
                    setFormStatus({ submitted: false, error: false, message: '' })
                  }
                  className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-300"
                >
                  Prześlij kolejny wniosek
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {formStatus.error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-start">
                    <AlertCircle className="mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span>{formStatus.message}</span>
                  </div>
                )}

                {/* Informacje osobowe */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4 border-b pb-2">Informacje osobowe</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-1">
                        Imię i nazwisko *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-1">
                        Numer telefonu *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-gray-700 mb-1">
                        Adres
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Szczegóły wypadku i ubezpieczenia */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4 border-b pb-2">
                    Szczegóły wypadku i ubezpieczenia
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="accidentDate" className="block text-gray-700 mb-1">
                        Data zdażenia
                      </label>
                      <input
                        type="date"
                        id="accidentDate"
                        name="accidentDate"
                        value={formData.accidentDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="insuranceCompany" className="block text-gray-700 mb-1">
                        Firma ubezpieczeniowa sprawcy
                      </label>
                      <input
                        type="text"
                        id="insuranceCompany"
                        name="insuranceCompany"
                        value={formData.insuranceCompany}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="policyNumber" className="block text-gray-700 mb-1">
                        Numer polisy sprawcy
                      </label>
                      <input
                        type="text"
                        id="policyNumber"
                        name="policyNumber"
                        value={formData.policyNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="carType" className="block text-gray-700 mb-1">
                        Marka i model uszkodzonego pojazdu
                      </label>
                      <select
                        id="carType"
                        name="carType"
                        value={formData.carType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Wybierz...</option>
                        <option value="economy">Economy</option>
                        <option value="compact">Compact</option>
                        <option value="midsize">Midsize</option>
                        <option value="suv">SUV</option>
                        <option value="luxury">Luxury</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Sekcja dodatkowych pól */}
                <div className="mb-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="accidentPlace" className="block text-gray-700 mb-1">
                        Miejsce zdarzenia
                      </label>
                      <input
                        type="text"
                        id="accidentPlace"
                        name="accidentPlace"
                        value={formData.accidentPlace}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="culpritRegistrationNumber" className="block text-gray-700 mb-1">
                        Numer rejestracyjny sprawcy
                      </label>
                      <input
                        type="text"
                        id="culpritRegistrationNumber"
                        name="culpritRegistrationNumber"
                        value={formData.culpritRegistrationNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="culpritCar" className="block text-gray-700 mb-1">
                        Marka i model pojazdu sprawcy
                      </label>
                      <input
                        type="text"
                        id="culpritCar"
                        name="culpritCar"
                        value={formData.culpritCar}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="statementRecorded" className="block text-gray-700 mb-1">
                        Czy spisano oświadczenie?
                      </label>
                      <select
                        id="statementRecorded"
                        name="statementRecorded"
                        value={formData.statementRecorded}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Wybierz...</option>
                        <option value="tak">Tak</option>
                        <option value="nie">Nie</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="policeInvolved" className="block text-gray-700 mb-1">
                        Czy była policja?
                      </label>
                      <select
                        id="policeInvolved"
                        name="policeInvolved"
                        value={formData.policeInvolved}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Wybierz...</option>
                        <option value="tak">Tak</option>
                        <option value="nie">Nie</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="registrationDetained" className="block text-gray-700 mb-1">
                        Czy został zatrzymany dowód rejestracyjny?
                      </label>
                      <select
                        id="registrationDetained"
                        name="registrationDetained"
                        value={formData.registrationDetained}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Wybierz...</option>
                        <option value="tak">Tak</option>
                        <option value="nie">Nie</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="vehicleTowed" className="block text-gray-700 mb-1">
                        Czy pojazd był holowany?
                      </label>
                      <select
                        id="vehicleTowed"
                        name="vehicleTowed"
                        value={formData.vehicleTowed}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Wybierz...</option>
                        <option value="tak">Tak</option>
                        <option value="nie">Nie</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="airbagsDeployed" className="block text-gray-700 mb-1">
                        Czy wystrzeliły poduszki?
                      </label>
                      <select
                        id="airbagsDeployed"
                        name="airbagsDeployed"
                        value={formData.airbagsDeployed}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Wybierz...</option>
                        <option value="tak">Tak</option>
                        <option value="nie">Nie</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="leased" className="block text-gray-700 mb-1">
                        Czy pojazd jest w leasingu?
                      </label>
                      <select
                        id="leased"
                        name="leased"
                        value={formData.leased}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Wybierz...</option>
                        <option value="tak">Tak</option>
                        <option value="nie">Nie</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="privateVehicle" className="block text-gray-700 mb-1">
                        Czy pojazd jest prywatny?{" "}
                        <span className="text-sm">(jeśli nie, to jest na firmę)</span>
                      </label>
                      <select
                        id="privateVehicle"
                        name="privateVehicle"
                        value={formData.privateVehicle}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Wybierz...</option>
                        <option value="tak">Tak</option>
                        <option value="nie">Nie</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Nowa sekcja: Opis zdarzenia */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4 border-b pb-2">Opis zdarzenia</h3>
                  <textarea
                    id="incidentDescription"
                    name="incidentDescription"
                    value={formData.incidentDescription}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Opisz, co się wydarzyło..."
                  ></textarea>
                </div>

                {/* Dane Właściciela Pojazdu */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4 border-b pb-2">Dane Właściciela Pojazdu</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ownerName" className="block text-gray-700 mb-1">
                        Imię i nazwisko *
                      </label>
                      <input
                        type="text"
                        id="ownerName"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-gray-700 mb-1">
                        Kod pocztowy *
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-gray-700 mb-1">
                        Miejscowość *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="street" className="block text-gray-700 mb-1">
                        Ulica *
                      </label>
                      <input
                        type="text"
                        id="street"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="houseNumber" className="block text-gray-700 mb-1">
                        Nr domu/lokalu *
                      </label>
                      <input
                        type="text"
                        id="houseNumber"
                        name="houseNumber"
                        value={formData.houseNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="voivodeship" className="block text-gray-700 mb-1">
                        Województwo *
                      </label>
                      <input
                        type="text"
                        id="voivodeship"
                        name="voivodeship"
                        value={formData.voivodeship}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="pesel" className="block text-gray-700 mb-1">
                        PESEL *
                      </label>
                      <input
                        type="text"
                        id="pesel"
                        name="pesel"
                        value={formData.pesel}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="ownerPhone" className="block text-gray-700 mb-1">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="ownerPhone"
                        name="ownerPhone"
                        value={formData.ownerPhone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="ownerEmail" className="block text-gray-700 mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="ownerEmail"
                        name="ownerEmail"
                        value={formData.ownerEmail}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-800 transition duration-300"
                  >
                    Prześlij zapytanie
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Skontaktuj się z nami</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone size={32} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Zadzwoń</h3>
                <p>+48 500 600 700</p>
                <p>Monday-Friday: 8am-8pm</p>
              </div>
              <div className="text-center">
                <Mail size={32} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p>tomasz.cabaj@gmail.com</p>
                <p>Odpowiadamy w 24h</p>
              </div>
              <div className="text-center">
                <MapPin size={32} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p>123 Rental Street</p>
                <p>Warsaw, Poland</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Car size={24} />
              <span className="text-xl font-bold">I jedziesz dalej</span>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} I jedziesz dalej. All rights reserved.</p>
              <p className="text-gray-400 text-sm mt-1">
                Replacement vehicles under insurance policies
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

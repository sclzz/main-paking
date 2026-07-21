import { useState } from "react";
import { ShieldCheck, Flame, Award } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apa itu PA KING?",
      answer:
        "PA KING adalah brand kuliner yang berfokus pada pengolahan bebek berkualitas premium dengan standar produksi yang konsisten."
    },
    {
      question: "Apakah PA KING melayani bisnis atau restoran?",
      answer:
        "Ya. Selain melayani pelanggan individu, PA KING juga menjadi mitra pasokan untuk restoran, bisnis kuliner, dan katering."
    },
    {
      question: "Bagaimana standar kualitas produk PA KING?",
      answer:
        "Kami menggunakan bahan baku pilihan, proses produksi terstandarisasi, serta pengawasan kualitas ketat untuk memastikan konsistensi rasa dan kualitas."
    },
    {
      question: "Apakah produk PA KING tersedia untuk pemesanan besar?",
      answer:
        "Tersedia. Kami melayani kebutuhan distribusi dan pemesanan dalam jumlah besar untuk kebutuhan bisnis kuliner."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO ABOUT */}
      <section className="bg-[#131313] text-white py-24">        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About PA KING</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            PA KING adalah brand kuliner yang berfokus pada pengolahan hidangan
            bebek berkualitas premium. Kami menghadirkan produk dengan
            standar produksi yang tinggi, proses pengolahan yang konsisten,
            serta kualitas rasa yang dapat diandalkan untuk pelanggan
            individu maupun kebutuhan bisnis kuliner.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-24 text-black">

        {/* OUR STORY */}
        <section className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tahun 2006 menjadi titik awal perjalanan panjang PA KING. Berawal dari keyakinan sederhana namun kuat bahwa hidangan bebek peking khas Asia layak dihadirkan dengan standar kualitas yang tidak pernah dikompromikan PA KING memulai langkahnya sebagai pemasok bebek peking untuk kebutuhan B2B catering. Di masa-masa awal inilah fondasi PA KING benar-benar diuji dan dibentuk.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Melayani berbagai mitra restoran dan penyelenggara katering, PA KING belajar bahwa kepercayaan tidak dibangun dalam semalam. Ia lahir dari konsistensi rasa yang terjaga di setiap batch produksi, dari kedisiplinan menjaga standar kebersihan dan keamanan pangan, serta dari komitmen untuk selalu hadir tepat waktu bagi setiap mitra yang mengandalkan kami.
            </p>

            <br/>

            <p className="text-gray-700 leading-relaxed">
              Namun dunia kuliner terus bergerak, dan PA KING memilih bergerak bersamanya. Dari yang semula murni bermain di jalur B2B, PA KING bertransformasi menjadi bisnis dagang yang lebih luas dan merambah ke penjualan online membuka pintu bagi pelanggan individu untuk turut merasakan cita rasa yang selama ini hanya dinikmati di balik layar industri katering. Hari ini, hampir dua dekade sejak didirikan, PA KING berdiri sebagai bukti bahwa kualitas konsisten mampu mengubah usaha pemasok kecil menjadi nama yang dipercaya.
            </p>
          </div>

        {/* OUR commitment */}
          <div className="bg-gray-100 rounded-xl p-8 h-full flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <p className="text-gray-700 leading-relaxed">
              Kami berkomitmen menjaga kualitas produk melalui proses produksi yang terstandarisasi, pemilihan bahan baku premium, serta pengawasan kualitas yang ketat untuk memastikan setiap produk memenuhi standar terbaik.
            </p>
            <br/>
            <p className="text-gray-700 leading-relaxed">
              Komitmen ini tidak berubah sejak PA KING pertama kali melayani mitra B2B supplier bahkan kini, saat menjangkau lebih banyak pelanggan melalui jalur dagang dan online, standar yang sama tetap kami pegang teguh di setiap tahap produksi.
            </p>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Vision</h2>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Menjadi brand olahan bebek peking terpercaya dan dikenal luas</li>
              <li>• Dipercaya luas oleh pelanggan yang mengutamakan kualitas dan konsistensi rasa</li>
              <li>• Konsisten menjaga kualitas produk dan standar produksi tinggi</li>
              <li>• Terus berkembang dari generasi ke generasi sejak 2006</li>
            </ul>
          </div>
          
         {/* MISSION */}
          <div>
<h2 className="text-3xl font-semibold mb-4">Mission</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Menyediakan produk olahan bebek dengan kualitas terbaik</li>
              <li>• Menjaga standar kebersihan dan keamanan pangan</li>
              <li>• Memberikan layanan terbaik langsung kepada pelanggan</li>
              <li>• Memperluas jangkauan lewat distribusi dan penjualan online</li>
            </ul>
          </div>
        </section>
                
        {/* WHY CHOOSE US */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose PA KING
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <ShieldCheck className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-700">
                Kami menggunakan bahan baku bebek pilihan yang diproses dengan
                standar kualitas tinggi.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Flame className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Consistent Taste</h3>
              <p className="text-gray-700">
                Proses produksi yang terstandarisasi memastikan rasa yang
                konsisten pada setiap produk.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Since 2006</h3>
              <p className="text-gray-700">
                Hampir dua dekade pengalaman mengolah bebek peking, kini
                dapat dinikmati langsung oleh Anda.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full text-left p-5 flex justify-between items-center font-medium"
                  >
                    {faq.question}
                    <span className="text-xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`px-5 text-gray-700 transition-all duration-300 ${
                      isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
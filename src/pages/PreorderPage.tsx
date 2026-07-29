import { useState } from "react";
import {
  Building2,
  User,
  Phone,
  Package,
  MapPin,
  MessageSquare,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PreorderPage = () => {
  const [preorderForm, setPreorderForm] = useState({
    name: "",
    company: "",
    phone: "",
    quantity: "",
    city: "",
    notes: "",
  });

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -6, y: x * 6 });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handlePreorderChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPreorderForm({ ...preorderForm, [e.target.name]: e.target.value });
  };

  const handlePreorderSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waNumber = "628121333654";

    const message = `Halo PA KING, saya ingin mengajukan bulk order / kerja sama bisnis:\n\nNama: ${preorderForm.name}\nPerusahaan/Bisnis: ${preorderForm.company || "-"}\nNo. HP: ${preorderForm.phone}\nPerkiraan Jumlah Order: ${preorderForm.quantity}\nKota: ${preorderForm.city || "-"}\nCatatan Tambahan: ${preorderForm.notes || "-"}`;

    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-20">
        <section>
          <div
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.15s ease-out",
            }}
            className="bg-[#131313] rounded-2xl px-8 py-16 md:px-20 md:py-20"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-white">
              Pre Order Pesanan
            </h2>
            <p className="text-gray-300 text-center max-w-xl mx-auto mb-12 text-lg">
              Butuh pemesanan dalam jumlah besar untuk restoran, katering, atau
              bisnis kuliner Anda? Isi form berikut dan tim kami akan
              menghubungi Anda melalui WhatsApp.
            </p>

            <form
              onSubmit={handlePreorderSubmit}
              className="max-w-3xl mx-auto space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C09B40]" />
                  <input
                    type="text"
                    name="company"
                    value={preorderForm.company}
                    onChange={handlePreorderChange}
                    className="w-full bg-white rounded-lg pl-14 pr-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#C09B40] transition-shadow"
                    placeholder="Nama Perusahaan / Restoran (opsional)"
                  />
                </div>

                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C09B40]" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={preorderForm.name}
                    onChange={handlePreorderChange}
                    className="w-full bg-white rounded-lg pl-14 pr-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#C09B40] transition-shadow"
                    placeholder="Nama Kontak"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C09B40]" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={preorderForm.phone}
                    onChange={handlePreorderChange}
                    className="w-full bg-white rounded-lg pl-14 pr-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#C09B40] transition-shadow"
                    placeholder="Nomor WhatsApp"
                  />
                </div>

                <div className="relative">
                  <Package className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C09B40]" />
                  <input
                    type="text"
                    name="quantity"
                    required
                    value={preorderForm.quantity}
                    onChange={handlePreorderChange}
                    className="w-full bg-white rounded-lg pl-14 pr-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#C09B40] transition-shadow"
                    placeholder="Perkiraan Jumlah Order"
                  />
                </div>

                <div className="relative md:col-span-2">
                  <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C09B40]" />
                  <input
                    type="text"
                    name="city"
                    value={preorderForm.city}
                    onChange={handlePreorderChange}
                    className="w-full bg-white rounded-lg pl-14 pr-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#C09B40] transition-shadow"
                    placeholder="Kota"
                  />
                </div>
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-5 top-5 w-5 h-5 text-[#C09B40]" />
                <textarea
                  name="notes"
                  value={preorderForm.notes}
                  onChange={handlePreorderChange}
                  rows={4}
                  className="w-full bg-white rounded-lg pl-14 pr-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#C09B40] transition-shadow resize-none"
                  placeholder="Ceritakan kebutuhan bisnis Anda..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C09B40] text-[#131313] font-semibold text-lg rounded-lg py-4 hover:bg-[#d4ac4a] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-[#C09B40]/30"
              >
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PreorderPage;
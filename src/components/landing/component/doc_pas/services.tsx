"use client";

import React, { useRef, useState } from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import {
  BentoGrid,
  BentoGridItem,
} from "@/components/ui/bento-grid-undangan-digital";
import { TabsPASDocs } from "@/components/ui/tabsPASDocs";
import { FlipWords } from "@/components/ui/flip-words";
// import { BsWhatsapp } from "react-icons/bs";
import { Search } from "lucide-react";
import Doc_SPKMobile from "../documentation/spkmobile";
import Doc_sap from "../documentation/sap";
import Doc_pas from "../documentation/pas";
import Doc_rpk from "../documentation/rpk";
import Doc_spk from "../documentation/spk";

function Service() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // const handleWhatsAppClick = (productName: string, productPrice: string) => {
  //   const message = `Halo,  ${productName}. Berikut detail nya:
  // - Harga: ${productPrice} Apakah tersedia? Mohon informasinya. Terima kasih!`;
  //   window.location.href = `https://wa.me/62895637316999?text=${encodeURIComponent(
  //     message
  //   )}`;
  // };

  const [search, setSearch] = useState("");
  // Di page/parent component
  const tabsRef = useRef<{ switchTab: (value: string) => void }>(null);
  const handleSearch = (value: string) => {
    setSearch(value);

    const found = searchHandle.find(
      (doc) => doc.tcode.toLowerCase() === value.toLowerCase()
    );

    if (found) {
      // 1. Pindah ke tab yang benar
      tabsRef.current?.switchTab(found.tab);

      // 2. Scroll setelah tab aktif & konten ter-render
      setTimeout(() => {
        const element = document.getElementById(found.tcode);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400);
    }
  };
  const searchHandle = [
    {
      tcode: "ZPAS502",
      title: "Membuat SPK",
      tab: "SPK Mobile",
    },
    {
      tcode: "ZPAS501",
      title: "Membuat RPK",
      tab: "SPK Mobile",
    },
    {
      tcode: "ZPAS220",
      title: "Report Absensi",
      tab: "SPK Mobile",
    },
    {
      tcode: "ZPASR33M",
      title: "Send Tenaga Kerja ke SPK Mobile",
      tab: "SPK Mobile",
    },
    {
      tcode: "ZPASR32M",
      title: "Send Aktivitas ke SPK Mobile",
      tab: "SPK Mobile",
    },
    {
      tcode: "ZPASR31M",
      title: "Send Lokasi ke SPK Mobile",
      tab: "SPK Mobile",
    },
    {
      tcode: "ZPAS601D_M",
      title: "Realisasi SPK Mobile ke",
      tab: "SPK Mobile",
    },
    {
      tcode: "ZPASR31M",
      title: "Report Realisasi",
      tab: "PAS",
    },
    {
      tcode: "ZPAS_PENGAMATAN",
      title: "Pengamatan",
      tab: "Pengamatan",
    },
    {
      tcode: "Irigasi",
      title: "Irigasi",
      tab: "SPK Mobile",
    },
  ];

  const tabs = [
    {
      title: "SPK Mobile",
      value: "SPK Mobile",
      content: <></>,
    },
    {
      title: "SAP",
      value: "SAP",
      content: <></>,
    },
    {
      title: "PAS",
      value: "PAS",
      content: <></>,
    },
    {
      title: "RPK",
      value: "RPK",
      content: <></>,
    },
    {
      title: "SPK",
      value: "SPK",
      content: <></>,
    },
    {
      title: "LKH",
      value: "LKH",
      content: <></>,
    },
    {
      title: "LHO",
      value: "LHO",
      content: <></>,
    },
    {
      title: "LHR",
      value: "LHR",
      content: <></>,
    },
    {
      title: "LKB",
      value: "LKB",
      content: <></>,
    },
    {
      title: "Pengamatan",
      value: "Pengamatan",
      content: <></>,
    },
  ];

  // Dokumentasi SPK Mobile
  const doc_spkmobile = [
    {
      description: (
        <>
          <Doc_SPKMobile />
        </>
      ),
    },
  ];

  // Dokumentasi SAP
  const doc_sap = [
    {
      description: (
        <>
          <Doc_sap />
        </>
      ),
    },
    {
      title: "SAP 2",
      description: (
        <>
        </>
      ),
    },
  ];

  // Dokumentasi PAS
  const doc_pas = [
    {
      // title: "PAS 1",
      // header: (
      //   <>
      //     <Image
      //       onClick={() =>
      //         window.open("", "_blank")
      //       }
      //       src="/assets/images/khitan1.png"
      //       alt="tidak ada gambar"
      //       width="500"
      //       height="500"
      //       className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
      //     />
      //   </>
      // ),
      description: (
        <>
          <Doc_pas />
        </>
      ),
    },
  ];

  // Dokumentasi RPK
  const doc_rpk = [
    {
      description: (
        <>
          <Doc_rpk />
        </>
      ),
    },

  ];

  // Dokumentasi SPK
  const doc_spk = [
    {
      description: (
        <>
          <Doc_spk />
        </>
      ),
    },
  ];

  // Dokumentasi LKH
  const doc_lkh = [
    {
      description: (
        <>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[32px] border border-green-100 bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 p-8 md:p-12 shadow-xl">
              {/* Blur Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <Image
                  src="/assets/images/SAP.png"
                  width={200}
                  height={200}
                  alt="SAP PAS Documentation"
                  className="flex m-auto drop-shadow-2xl bg-white rounded-lg p-4"
                />

                <div className="text-center mt-6 text-white">
                  <p className="uppercase tracking-[4px] text-green-100 text-xs md:text-sm mb-3">
                    Plantation Application System
                  </p>

                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    SAP PAS Documentation
                  </h1>

                  <p className="text-sm md:text-lg text-green-50 max-w-3xl mx-auto leading-8">
                    Sistem digital operasional plantation untuk mendukung proses
                    administrasi, monitoring, dan pelaporan pekerjaan secara
                    terintegrasi.
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full bg-green-600" />
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  1
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Latar Belakang
                </h2>
              </div>

              <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                <span className="font-semibold text-green-700">
                  Latar Belakang
                </span>{" "}
                Dalam mendukung kegiatan operasional perusahaan, Great Giant Food
                (GGF) menggunakan sistem SAP ECC (Enterprise Central Component)
                sebagai platform utama dalam pengelolaan data dan proses bisnis
                secara terintegrasi.

                SAP ECC berperan penting dalam mengelola berbagai aktivitas
                operasional, khususnya dalam pencatatan kegiatan di lapangan,
                pengelolaan tenaga kerja, serta penyusunan laporan kerja.
                <br />
                <br />
                Dengan adanya sistem ini, data operasional dapat dikelola secara
                lebih terstruktur, akurat, dan terpusat. Seiring dengan perkembangan
                teknologi, proses input data operasional di GGF juga didukung oleh
                aplikasi mobile yang digunakan oleh tim lapangan. Data yang diinput
                melalui aplikasi tersebut akan tersinkronisasi secara otomatis ke
                dalam SAP ECC dan menjadi dasar dalam pembentukan laporan, seperti
                LKH, LHO, LKB, LHR dan lainnya. Dengan integrasi antara aplikasi
                mobile dan SAP ECC, proses pengelolaan data menjadi lebih efisien
                serta mendukung pengambilan keputusan yang lebih cepat dan tepat.
              </p>
            </div>

            {/* Description */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full bg-green-600" />
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  2
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Gambaran Umum SAP
                </h2>
              </div>

              <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                <span className="font-semibold text-green-700">
                  SAP ECC (Enterprise Central Component)
                </span>{" "}
                adalah sistem yang digunakan perusahaan untuk mengelola berbagai kegiatan operasional dalam satu platform terintegrasi.

                SAP sendiri merupakan singkatan dari Systems, Applications, and Products in Data Processing, yaitu sebuah sistem ERP (Enterprise Resource Planning) yang dikembangkan oleh perusahaan teknologi SAP SE yang berasal dari Jerman.

                Sistem ini dirancang untuk membantu perusahaan dalam mengelola data dan proses bisnis secara terpusat, sehingga informasi dapat diakses dengan lebih cepat, akurat, dan terstruktur.
                Secara sederhana, SAP dapat diibaratkan sebagai “pusat data” perusahaan, di mana seluruh informasi operasional dikumpulkan dan diolah dalam satu sistem.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="group rounded-[28px] border border-green-100 bg-white p-6 shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  3
                </div>

                <h3 className="font-bold text-xl text-green-700 mb-5">
                  Tujuan SAP
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-slate-700 leading-7">
                  <li>• Mempermudah proses administrasi plantation</li>
                  <li>• Meminimalisir kesalahan input data</li>
                  <li>• Mempercepat monitoring pekerjaan</li>
                  <li>• Integrasi data antar bagian</li>
                  <li>• Mendukung digitalisasi perusahaan</li>
                </ul>
              </div>

              <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  4
                </div>

                <h3 className="font-bold text-xl text-green-700 mb-5">
                  Fungsi Utama
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-slate-700 leading-7">
                  <li>• SAP (Systems, Applications, and Products in Data Processing) adalah sistem ERP yang digunakan untuk mengelola proses bisnis perusahaan secara terintegrasi</li>
                  <li>• SAP membantu menghubungkan berbagai fungsi seperti pembelian, penjualan, gudang, dan keuangan dalam satu sistem</li>
                  <li>• Sistem ini digunakan untuk mencatat, memproses, dan memonitor setiap transaksi operasional perusahaan</li>
                  <li>• Data dalam SAP bersifat terpusat sehingga dapat diakses oleh bagian terkait sesuai dengan hak akses pengguna</li>
                  <li>• Setiap transaksi yang dilakukan akan langsung mempengaruhi data di modul lain (real-time)</li>
                  <li>• SAP menyediakan laporan yang dapat digunakan untuk monitoring dan pengambilan keputusan</li>
                  <li>• Dalam kegiatan administrasi, SAP digunakan untuk input data transaksi, pengecekan data, serta pembuatan laporan</li>
                </ul>
              </div>
            </div>

            {/* Highlight */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#00a3de] p-6 md:p-8 text-white shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    💡
                  </div>

                  <h3 className="font-bold text-xl">
                    Informasi Penting
                  </h3>
                </div>

                <p className="text-sm md:text-base leading-8 text-slate-200 text-justify">
                  SAP PAS dibuat secara{" "}
                  <span className="font-semibold text-secondary">
                    custom
                  </span>{" "}
                  sesuai kebutuhan operasional plantation perusahaan, sehingga
                  alur bisnis dan fitur yang digunakan telah disesuaikan dengan
                  proses kerja di lapangan.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  // Dokumentasi LHO
  const doc_lho = [
    {
      description: (
        <>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[32px] border border-green-100 bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 p-8 md:p-12 shadow-xl">
              {/* Blur Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <Image
                  src="/assets/images/SAP.png"
                  width={200}
                  height={200}
                  alt="SAP PAS Documentation"
                  className="flex m-auto drop-shadow-2xl bg-white rounded-lg p-4"
                />

                <div className="text-center mt-6 text-white">
                  <p className="uppercase tracking-[4px] text-green-100 text-xs md:text-sm mb-3">
                    Plantation Application System
                  </p>

                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    SAP PAS Documentation
                  </h1>

                  <p className="text-sm md:text-lg text-green-50 max-w-3xl mx-auto leading-8">
                    Sistem digital operasional plantation untuk mendukung proses
                    administrasi, monitoring, dan pelaporan pekerjaan secara
                    terintegrasi.
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full bg-green-600" />
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  1
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Latar Belakang
                </h2>
              </div>

              <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                <span className="font-semibold text-green-700">
                  Latar Belakang
                </span>{" "}
                Dalam mendukung kegiatan operasional perusahaan, Great Giant Food
                (GGF) menggunakan sistem SAP ECC (Enterprise Central Component)
                sebagai platform utama dalam pengelolaan data dan proses bisnis
                secara terintegrasi.

                SAP ECC berperan penting dalam mengelola berbagai aktivitas
                operasional, khususnya dalam pencatatan kegiatan di lapangan,
                pengelolaan tenaga kerja, serta penyusunan laporan kerja.
                <br />
                <br />
                Dengan adanya sistem ini, data operasional dapat dikelola secara
                lebih terstruktur, akurat, dan terpusat. Seiring dengan perkembangan
                teknologi, proses input data operasional di GGF juga didukung oleh
                aplikasi mobile yang digunakan oleh tim lapangan. Data yang diinput
                melalui aplikasi tersebut akan tersinkronisasi secara otomatis ke
                dalam SAP ECC dan menjadi dasar dalam pembentukan laporan, seperti
                LKH, LHO, LKB, LHR dan lainnya. Dengan integrasi antara aplikasi
                mobile dan SAP ECC, proses pengelolaan data menjadi lebih efisien
                serta mendukung pengambilan keputusan yang lebih cepat dan tepat.
              </p>
            </div>

            {/* Description */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full bg-green-600" />
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  2
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Gambaran Umum SAP
                </h2>
              </div>

              <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                <span className="font-semibold text-green-700">
                  SAP ECC (Enterprise Central Component)
                </span>{" "}
                adalah sistem yang digunakan perusahaan untuk mengelola berbagai kegiatan operasional dalam satu platform terintegrasi.

                SAP sendiri merupakan singkatan dari Systems, Applications, and Products in Data Processing, yaitu sebuah sistem ERP (Enterprise Resource Planning) yang dikembangkan oleh perusahaan teknologi SAP SE yang berasal dari Jerman.

                Sistem ini dirancang untuk membantu perusahaan dalam mengelola data dan proses bisnis secara terpusat, sehingga informasi dapat diakses dengan lebih cepat, akurat, dan terstruktur.
                Secara sederhana, SAP dapat diibaratkan sebagai “pusat data” perusahaan, di mana seluruh informasi operasional dikumpulkan dan diolah dalam satu sistem.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="group rounded-[28px] border border-green-100 bg-white p-6 shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  3
                </div>

                <h3 className="font-bold text-xl text-green-700 mb-5">
                  Tujuan SAP
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-slate-700 leading-7">
                  <li>• Mempermudah proses administrasi plantation</li>
                  <li>• Meminimalisir kesalahan input data</li>
                  <li>• Mempercepat monitoring pekerjaan</li>
                  <li>• Integrasi data antar bagian</li>
                  <li>• Mendukung digitalisasi perusahaan</li>
                </ul>
              </div>

              <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  4
                </div>

                <h3 className="font-bold text-xl text-green-700 mb-5">
                  Fungsi Utama
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-slate-700 leading-7">
                  <li>• SAP (Systems, Applications, and Products in Data Processing) adalah sistem ERP yang digunakan untuk mengelola proses bisnis perusahaan secara terintegrasi</li>
                  <li>• SAP membantu menghubungkan berbagai fungsi seperti pembelian, penjualan, gudang, dan keuangan dalam satu sistem</li>
                  <li>• Sistem ini digunakan untuk mencatat, memproses, dan memonitor setiap transaksi operasional perusahaan</li>
                  <li>• Data dalam SAP bersifat terpusat sehingga dapat diakses oleh bagian terkait sesuai dengan hak akses pengguna</li>
                  <li>• Setiap transaksi yang dilakukan akan langsung mempengaruhi data di modul lain (real-time)</li>
                  <li>• SAP menyediakan laporan yang dapat digunakan untuk monitoring dan pengambilan keputusan</li>
                  <li>• Dalam kegiatan administrasi, SAP digunakan untuk input data transaksi, pengecekan data, serta pembuatan laporan</li>
                </ul>
              </div>
            </div>

            {/* Highlight */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#00a3de] p-6 md:p-8 text-white shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    💡
                  </div>

                  <h3 className="font-bold text-xl">
                    Informasi Penting
                  </h3>
                </div>

                <p className="text-sm md:text-base leading-8 text-slate-200 text-justify">
                  SAP PAS dibuat secara{" "}
                  <span className="font-semibold text-secondary">
                    custom
                  </span>{" "}
                  sesuai kebutuhan operasional plantation perusahaan, sehingga
                  alur bisnis dan fitur yang digunakan telah disesuaikan dengan
                  proses kerja di lapangan.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  // Dokumentasi LHR
  const doc_lhr = [
    {
      description: (
        <>
          <div className="space-y-6">
            {/* Description */}
            {/* <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="relative z-10">
                <Image
                  src="/assets/images/gedung_sap.jpg"
                  width={200}
                  height={200}
                  alt="SAP PAS Documentation"
                  className="flex m-auto drop-shadow-2xl bg-white rounded-lg p-4 w-64 h-auto"
                />
              </div>
            </div> */}
            <div className="relative overflow-hidden rounded-[32px] border border-green-100 bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 p-8 md:p-12 shadow-xl">
              {/* Blur Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <Image
                  src="/assets/images/SAP.png"
                  width={200}
                  height={200}
                  alt="SAP PAS Documentation"
                  className="flex m-auto drop-shadow-2xl bg-white rounded-lg p-4"
                />

                <div className="text-center mt-6 text-white">
                  <p className="uppercase tracking-[4px] text-green-100 text-xs md:text-sm mb-3">
                    Plantation Application System
                  </p>

                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    SAP PAS Documentation
                  </h1>

                  <p className="text-sm md:text-lg text-green-50 max-w-3xl mx-auto leading-8">
                    Sistem digital operasional plantation untuk mendukung proses
                    administrasi, monitoring, dan pelaporan pekerjaan secara
                    terintegrasi.
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full bg-green-600" />
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  1
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Latar Belakang
                </h2>
              </div>

              <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                <span className="font-semibold text-green-700">
                  Latar Belakang
                </span>{" "}
                Dalam mendukung kegiatan operasional perusahaan, Great Giant Food
                (GGF) menggunakan sistem SAP ECC (Enterprise Central Component)
                sebagai platform utama dalam pengelolaan data dan proses bisnis
                secara terintegrasi.

                SAP ECC berperan penting dalam mengelola berbagai aktivitas
                operasional, khususnya dalam pencatatan kegiatan di lapangan,
                pengelolaan tenaga kerja, serta penyusunan laporan kerja.
                <br />
                <br />
                Dengan adanya sistem ini, data operasional dapat dikelola secara
                lebih terstruktur, akurat, dan terpusat. Seiring dengan perkembangan
                teknologi, proses input data operasional di GGF juga didukung oleh
                aplikasi mobile yang digunakan oleh tim lapangan. Data yang diinput
                melalui aplikasi tersebut akan tersinkronisasi secara otomatis ke
                dalam SAP ECC dan menjadi dasar dalam pembentukan laporan, seperti
                LKH, LHO, LKB, LHR dan lainnya. Dengan integrasi antara aplikasi
                mobile dan SAP ECC, proses pengelolaan data menjadi lebih efisien
                serta mendukung pengambilan keputusan yang lebih cepat dan tepat.
              </p>
            </div>

            {/* Description */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full bg-green-600" />
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  2
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Gambaran Umum SAP
                </h2>
              </div>

              <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                <span className="font-semibold text-green-700">
                  SAP ECC (Enterprise Central Component)
                </span>{" "}
                adalah sistem yang digunakan perusahaan untuk mengelola berbagai kegiatan operasional dalam satu platform terintegrasi.

                SAP sendiri merupakan singkatan dari Systems, Applications, and Products in Data Processing, yaitu sebuah sistem ERP (Enterprise Resource Planning) yang dikembangkan oleh perusahaan teknologi SAP SE yang berasal dari Jerman.

                Sistem ini dirancang untuk membantu perusahaan dalam mengelola data dan proses bisnis secara terpusat, sehingga informasi dapat diakses dengan lebih cepat, akurat, dan terstruktur.
                Secara sederhana, SAP dapat diibaratkan sebagai “pusat data” perusahaan, di mana seluruh informasi operasional dikumpulkan dan diolah dalam satu sistem.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="group rounded-[28px] border border-green-100 bg-white p-6 shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  3
                </div>

                <h3 className="font-bold text-xl text-green-700 mb-5">
                  Tujuan SAP
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-slate-700 leading-7">
                  <li>• Mempermudah proses administrasi plantation</li>
                  <li>• Meminimalisir kesalahan input data</li>
                  <li>• Mempercepat monitoring pekerjaan</li>
                  <li>• Integrasi data antar bagian</li>
                  <li>• Mendukung digitalisasi perusahaan</li>
                </ul>
              </div>

              <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  4
                </div>

                <h3 className="font-bold text-xl text-green-700 mb-5">
                  Fungsi Utama
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-slate-700 leading-7">
                  <li>• SAP (Systems, Applications, and Products in Data Processing) adalah sistem ERP yang digunakan untuk mengelola proses bisnis perusahaan secara terintegrasi</li>
                  <li>• SAP membantu menghubungkan berbagai fungsi seperti pembelian, penjualan, gudang, dan keuangan dalam satu sistem</li>
                  <li>• Sistem ini digunakan untuk mencatat, memproses, dan memonitor setiap transaksi operasional perusahaan</li>
                  <li>• Data dalam SAP bersifat terpusat sehingga dapat diakses oleh bagian terkait sesuai dengan hak akses pengguna</li>
                  <li>• Setiap transaksi yang dilakukan akan langsung mempengaruhi data di modul lain (real-time)</li>
                  <li>• SAP menyediakan laporan yang dapat digunakan untuk monitoring dan pengambilan keputusan</li>
                  <li>• Dalam kegiatan administrasi, SAP digunakan untuk input data transaksi, pengecekan data, serta pembuatan laporan</li>
                </ul>
              </div>
            </div>

            {/* Highlight */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#00a3de] p-6 md:p-8 text-white shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    💡
                  </div>

                  <h3 className="font-bold text-xl">
                    Informasi Penting
                  </h3>
                </div>

                <p className="text-sm md:text-base leading-8 text-slate-200 text-justify">
                  SAP PAS dibuat secara{" "}
                  <span className="font-semibold text-secondary">
                    custom
                  </span>{" "}
                  sesuai kebutuhan operasional plantation perusahaan, sehingga
                  alur bisnis dan fitur yang digunakan telah disesuaikan dengan
                  proses kerja di lapangan.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  // Dokumentasi LKB
  const doc_lkb = [
    {
      description: (
        <>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[32px] border border-green-100 bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 p-8 md:p-12 shadow-xl">
              {/* Blur Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <Image
                  src="/assets/images/SAP.png"
                  width={200}
                  height={200}
                  alt="SAP PAS Documentation"
                  className="flex m-auto drop-shadow-2xl bg-white rounded-lg p-4"
                />

                <div className="text-center mt-6 text-white">
                  <p className="uppercase tracking-[4px] text-green-100 text-xs md:text-sm mb-3">
                    Plantation Application System
                  </p>

                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    SAP PAS Documentation
                  </h1>

                  <p className="text-sm md:text-lg text-green-50 max-w-3xl mx-auto leading-8">
                    Sistem digital operasional plantation untuk mendukung proses
                    administrasi, monitoring, dan pelaporan pekerjaan secara
                    terintegrasi.
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full bg-green-600" />
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  1
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Latar Belakang
                </h2>
              </div>

              <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                <span className="font-semibold text-green-700">
                  Latar Belakang
                </span>{" "}
                Dalam mendukung kegiatan operasional perusahaan, Great Giant Food
                (GGF) menggunakan sistem SAP ECC (Enterprise Central Component)
                sebagai platform utama dalam pengelolaan data dan proses bisnis
                secara terintegrasi.

                SAP ECC berperan penting dalam mengelola berbagai aktivitas
                operasional, khususnya dalam pencatatan kegiatan di lapangan,
                pengelolaan tenaga kerja, serta penyusunan laporan kerja.
                <br />
                <br />
                Dengan adanya sistem ini, data operasional dapat dikelola secara
                lebih terstruktur, akurat, dan terpusat. Seiring dengan perkembangan
                teknologi, proses input data operasional di GGF juga didukung oleh
                aplikasi mobile yang digunakan oleh tim lapangan. Data yang diinput
                melalui aplikasi tersebut akan tersinkronisasi secara otomatis ke
                dalam SAP ECC dan menjadi dasar dalam pembentukan laporan, seperti
                LKH, LHO, LKB, LHR dan lainnya. Dengan integrasi antara aplikasi
                mobile dan SAP ECC, proses pengelolaan data menjadi lebih efisien
                serta mendukung pengambilan keputusan yang lebih cepat dan tepat.
              </p>
            </div>

            {/* Description */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full bg-green-600" />
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  2
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Gambaran Umum SAP
                </h2>
              </div>

              <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                <span className="font-semibold text-green-700">
                  SAP ECC (Enterprise Central Component)
                </span>{" "}
                adalah sistem yang digunakan perusahaan untuk mengelola berbagai kegiatan operasional dalam satu platform terintegrasi.

                SAP sendiri merupakan singkatan dari Systems, Applications, and Products in Data Processing, yaitu sebuah sistem ERP (Enterprise Resource Planning) yang dikembangkan oleh perusahaan teknologi SAP SE yang berasal dari Jerman.

                Sistem ini dirancang untuk membantu perusahaan dalam mengelola data dan proses bisnis secara terpusat, sehingga informasi dapat diakses dengan lebih cepat, akurat, dan terstruktur.
                Secara sederhana, SAP dapat diibaratkan sebagai “pusat data” perusahaan, di mana seluruh informasi operasional dikumpulkan dan diolah dalam satu sistem.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="group rounded-[28px] border border-green-100 bg-white p-6 shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  3
                </div>

                <h3 className="font-bold text-xl text-green-700 mb-5">
                  Tujuan SAP
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-slate-700 leading-7">
                  <li>• Mempermudah proses administrasi plantation</li>
                  <li>• Meminimalisir kesalahan input data</li>
                  <li>• Mempercepat monitoring pekerjaan</li>
                  <li>• Integrasi data antar bagian</li>
                  <li>• Mendukung digitalisasi perusahaan</li>
                </ul>
              </div>

              <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  4
                </div>

                <h3 className="font-bold text-xl text-green-700 mb-5">
                  Fungsi Utama
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-slate-700 leading-7">
                  <li>• SAP (Systems, Applications, and Products in Data Processing) adalah sistem ERP yang digunakan untuk mengelola proses bisnis perusahaan secara terintegrasi</li>
                  <li>• SAP membantu menghubungkan berbagai fungsi seperti pembelian, penjualan, gudang, dan keuangan dalam satu sistem</li>
                  <li>• Sistem ini digunakan untuk mencatat, memproses, dan memonitor setiap transaksi operasional perusahaan</li>
                  <li>• Data dalam SAP bersifat terpusat sehingga dapat diakses oleh bagian terkait sesuai dengan hak akses pengguna</li>
                  <li>• Setiap transaksi yang dilakukan akan langsung mempengaruhi data di modul lain (real-time)</li>
                  <li>• SAP menyediakan laporan yang dapat digunakan untuk monitoring dan pengambilan keputusan</li>
                  <li>• Dalam kegiatan administrasi, SAP digunakan untuk input data transaksi, pengecekan data, serta pembuatan laporan</li>
                </ul>
              </div>
            </div>

            {/* Highlight */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#00a3de] p-6 md:p-8 text-white shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    💡
                  </div>

                  <h3 className="font-bold text-xl">
                    Informasi Penting
                  </h3>
                </div>

                <p className="text-sm md:text-base leading-8 text-slate-200 text-justify">
                  SAP PAS dibuat secara{" "}
                  <span className="font-semibold text-secondary">
                    custom
                  </span>{" "}
                  sesuai kebutuhan operasional plantation perusahaan, sehingga
                  alur bisnis dan fitur yang digunakan telah disesuaikan dengan
                  proses kerja di lapangan.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  // Dokumentasi Pengamatan
  const doc_pengamatan = [
    // SAP PAS - Pengamatan
    {
      description: (
        <>
          <div id={"ZPAS_PENGAMATAN"} className="space-y-6">
            <div className="relative overflow-hidden rounded-[32px] border border-green-100 bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 p-8 md:p-12 shadow-xl">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <Image
                  src="/assets/images/SAP.png"
                  width={200}
                  height={200}
                  alt="SAP PAS Documentation"
                  className="flex m-auto drop-shadow-2xl bg-white rounded-lg p-4"
                />

                <div className="text-center mt-6 text-white">
                  <p className="uppercase tracking-[4px] text-green-100 text-xs md:text-sm mb-3">
                    Pengamatan
                  </p>

                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    SAP PAS Documentation
                  </h1>

                  <p className="text-sm md:text-lg text-green-50 max-w-3xl mx-auto leading-8">
                    Pengamatan
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full bg-green-600" />
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  1
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Latar Belakang
                </h2>
              </div>

              <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                <span className="font-semibold text-green-700">
                  Latar Belakang
                </span>{" "}
                Dalam mendukung kegiatan operasional perusahaan, Great Giant Food
                (GGF) menggunakan sistem SAP ECC (Enterprise Central Component)
                sebagai platform utama dalam pengelolaan data dan proses bisnis
                secara terintegrasi.

                SAP ECC berperan penting dalam mengelola berbagai aktivitas
                operasional, khususnya dalam pencatatan kegiatan di lapangan,
                pengelolaan tenaga kerja, serta penyusunan laporan kerja.
                <br />
                <br />
                Dengan adanya sistem ini, data operasional dapat dikelola secara
                lebih terstruktur, akurat, dan terpusat. Seiring dengan perkembangan
                teknologi, proses input data operasional di GGF juga didukung oleh
                aplikasi mobile yang digunakan oleh tim lapangan. Data yang diinput
                melalui aplikasi tersebut akan tersinkronisasi secara otomatis ke
                dalam SAP ECC dan menjadi dasar dalam pembentukan laporan, seperti
                LKH, LHO, LKB, LHR dan lainnya. Dengan integrasi antara aplikasi
                mobile dan SAP ECC, proses pengelolaan data menjadi lebih efisien
                serta mendukung pengambilan keputusan yang lebih cepat dan tepat.
              </p>
            </div>

            {/* Description */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full bg-green-600" />
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  2
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Gambaran Umum SAP
                </h2>
              </div>

              <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                <span className="font-semibold text-green-700">
                  SAP ECC (Enterprise Central Component)
                </span>{" "}
                adalah sistem yang digunakan perusahaan untuk mengelola berbagai kegiatan operasional dalam satu platform terintegrasi.

                SAP sendiri merupakan singkatan dari Systems, Applications, and Products in Data Processing, yaitu sebuah sistem ERP (Enterprise Resource Planning) yang dikembangkan oleh perusahaan teknologi SAP SE yang berasal dari Jerman.

                Sistem ini dirancang untuk membantu perusahaan dalam mengelola data dan proses bisnis secara terpusat, sehingga informasi dapat diakses dengan lebih cepat, akurat, dan terstruktur.
                Secara sederhana, SAP dapat diibaratkan sebagai “pusat data” perusahaan, di mana seluruh informasi operasional dikumpulkan dan diolah dalam satu sistem.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="group rounded-[28px] border border-green-100 bg-white p-6 shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  3
                </div>

                <h3 className="font-bold text-xl text-green-700 mb-5">
                  Tujuan SAP
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-slate-700 leading-7">
                  <li>• Mempermudah proses administrasi plantation</li>
                  <li>• Meminimalisir kesalahan input data</li>
                  <li>• Mempercepat monitoring pekerjaan</li>
                  <li>• Integrasi data antar bagian</li>
                  <li>• Mendukung digitalisasi perusahaan</li>
                </ul>
              </div>

              <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                  4
                </div>

                <h3 className="font-bold text-xl text-green-700 mb-5">
                  Fungsi Utama
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-slate-700 leading-7">
                  <li>• SAP (Systems, Applications, and Products in Data Processing) adalah sistem ERP yang digunakan untuk mengelola proses bisnis perusahaan secara terintegrasi</li>
                  <li>• SAP membantu menghubungkan berbagai fungsi seperti pembelian, penjualan, gudang, dan keuangan dalam satu sistem</li>
                  <li>• Sistem ini digunakan untuk mencatat, memproses, dan memonitor setiap transaksi operasional perusahaan</li>
                  <li>• Data dalam SAP bersifat terpusat sehingga dapat diakses oleh bagian terkait sesuai dengan hak akses pengguna</li>
                  <li>• Setiap transaksi yang dilakukan akan langsung mempengaruhi data di modul lain (real-time)</li>
                  <li>• SAP menyediakan laporan yang dapat digunakan untuk monitoring dan pengambilan keputusan</li>
                  <li>• Dalam kegiatan administrasi, SAP digunakan untuk input data transaksi, pengecekan data, serta pembuatan laporan</li>
                </ul>
              </div>
            </div>

            {/* Highlight */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#00a3de] p-6 md:p-8 text-white shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    💡
                  </div>

                  <h3 className="font-bold text-xl">
                    Informasi Penting
                  </h3>
                </div>

                <p className="text-sm md:text-base leading-8 text-slate-200 text-justify">
                  SAP PAS dibuat secara{" "}
                  <span className="font-semibold text-secondary">
                    custom
                  </span>{" "}
                  sesuai kebutuhan operasional plantation perusahaan, sehingga
                  alur bisnis dan fitur yang digunakan telah disesuaikan dengan
                  proses kerja di lapangan.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  // TABS Card
  const tabsCard = [
    {
      title: "SPK Mobile",
      value: "SPK Mobile",
      content: (
        <BentoGrid className="flex max-w-full h-screen rounded-xl">
          {doc_spkmobile.map((item, i) => (
            <>
              <div className="overflow-scroll">
                <BentoGridItem
                  key={i}
                  // title={item.title}
                  description={item.description}
                  // header={item.header}
                  // icon={item.icon}
                  className={i === 1 || i === 8 ? "md:col-span-1 col-span-1" : "bg-white"}
                />
              </div>
            </>
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "SAP",
      value: "SAP",
      content: (
        <BentoGrid className="flex max-w-full border-primary hover:border-secondary rounded-xl border-2">
          {doc_sap.map((item, i) => (
            <>
              <div key={i} className="overflow-scroll">
                <BentoGridItem
                  description={item.description}
                  className={i === 1 || i === 1 ? "md:col-span-1 col-span-1" : "bg-white"}
                />
              </div>
            </>
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "PAS",
      value: "PAS",
      content: (
        <BentoGrid className="flex max-w-full border-primary hover:border-secondary rounded-xl border-2">
          {doc_pas.map((item, i) => (
            <>
              <div className="overflow-scroll">
                <BentoGridItem
                  key={i}
                  // title={item.title}
                  description={item.description}
                  // header={item.header}
                  // icon={item.icon}
                  className={i === 1 || i === 8 ? "md:col-span-1 col-span-1" : "bg-white"}
                />
              </div>
            </>
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "RPK",
      value: "RPK",
      content: (
        <BentoGrid className="flex max-w-full border-primary hover:border-secondary rounded-xl border-2">
          {doc_rpk.map((item, i) => (
            <>
              <div className="overflow-scroll">
                <BentoGridItem
                  key={i}
                  // title={item.title}
                  description={item.description}
                  // header={item.header}
                  // icon={item.icon}
                  className={i === 1 || i === 8 ? "md:col-span-1 col-span-1" : "bg-white"}
                />
              </div>
            </>
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "SPK",
      value: "SPK",
      content: (
        <BentoGrid className="flex max-w-full border-primary hover:border-secondary rounded-xl border-2">
          {doc_spk.map((item, i) => (
            <>
              <div className="overflow-scroll">
                <BentoGridItem
                  key={i}
                  // title={item.title}
                  description={item.description}
                  // header={item.header}
                  // icon={item.icon}
                  className={i === 1 || i === 8 ? "md:col-span-1 col-span-1" : "bg-white"}
                />
              </div>
            </>
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "LKH",
      value: "LKH",
      content: (
        <BentoGrid className="flex max-w-full border-primary hover:border-secondary rounded-xl border-2">
          {doc_lkh.map((item, i) => (
            <>
              <div className="overflow-scroll">
                <BentoGridItem
                  key={i}
                  // title={item.title}
                  description={item.description}
                  // header={item.header}
                  // icon={item.icon}
                  className={i === 1 || i === 8 ? "md:col-span-1 col-span-1" : "bg-white"}
                />
              </div>
            </>
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "LHO",
      value: "LHO",
      content: (
        <BentoGrid className="flex max-w-full border-primary hover:border-secondary rounded-xl border-2">
          {doc_lho.map((item, i) => (
            <>
              <div className="overflow-scroll">
                <BentoGridItem
                  key={i}
                  // title={item.title}
                  description={item.description}
                  // header={item.header}
                  // icon={item.icon}
                  className={i === 1 || i === 8 ? "md:col-span-1 col-span-1" : "bg-white"}
                />
              </div>
            </>
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "LHR",
      value: "LHR",
      content: (
        <BentoGrid className="flex max-w-full border-primary hover:border-secondary rounded-xl border-2">
          {doc_lhr.map((item, i) => (
            <>
              <div className="overflow-scroll">
                <BentoGridItem
                  key={i}
                  // title={item.title}
                  description={item.description}
                  // header={item.header}
                  // icon={item.icon}
                  className={i === 1 || i === 8 ? "md:col-span-1 col-span-1" : "bg-white"}
                />
              </div>
            </>
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "LKB",
      value: "LKB",
      content: (
        <BentoGrid className="flex max-w-full border-primary hover:border-secondary rounded-xl border-2">
          {doc_lkb.map((item, i) => (
            <>
              <div className="overflow-scroll">
                <BentoGridItem
                  key={i}
                  // title={item.title}
                  description={item.description}
                  // header={item.header}
                  // icon={item.icon}
                  className={i === 1 || i === 8 ? "md:col-span-1 col-span-1" : "bg-white"}
                />
              </div>
            </>
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "Pengamatan",
      value: "Pengamatan",
      content: (
        <BentoGrid className="flex max-w-full border-primary hover:border-secondary rounded-xl border-2">
          {doc_pengamatan.map((item, i) => (
            <>
              <div className="overflow-scroll">
                <BentoGridItem
                  key={i}
                  // title={item.title}
                  description={item.description}
                  // header={item.header}
                  // icon={item.icon}
                  className={i === 1 || i === 8 ? "md:col-span-1 col-span-1" : "bg-white"}
                />
              </div>
            </>
          ))}
        </BentoGrid>
      ),
    },
  ];

  const words = [
    "SPK Mobile",
    "SAP",
    "PAS",
    "RPK",
    "SPK",
    "LHO",
    "LHR",
    "LKB",
  ];

  return (
    <>
      {!isMobile ? (
        <>
          {/* konten */}
          <section className="bg-gradient-to-b from-white via-white to-white animate-gradient">
            <div className="h-full w-full pt-10 flex justify-between [perspective:1000px] relative flex-col items-start">
              <h1 className="font-bold text-4xl text-center justify-center m-auto flex pt-10 text-primary hover:text-secondary">
                Dokumentasi
                <FlipWords className="text-secondary" words={words} />
              </h1>
              {/* Search bar */}
              <div className="relative w-full max-w-2xl m-auto mt-5 mb-10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-300/20 to-green-300/20 blur-md -z-10" />
                <div className="relative flex items-center bg-white border border-gray-200 rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-emerald-400 focus-within:border-emerald-400 transition-all duration-200">
                  <Search className="absolute left-4 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari TCode SAP"
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch(search);
                    }}
                    className="w-full pl-12 pr-14 py-3.5 bg-transparent rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none text-sm"
                  />
                  <kbd className="flex items-center gap-1 mr-4 px-2 py-1 text-xs text-gray-400 bg-gray-100 rounded-md border border-gray-200 shrink-0">
                    ↵
                  </kbd>
                </div>
              </div>
              <TabsPASDocs
                ref={tabsRef}
                tabs={tabs}
                tabsCard={tabsCard}
              />
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="relative overflow-hidden h-[1600px] bg-gradient-to-b from-slate-50 via-white to-white">
            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-100/40 rounded-full blur-3xl" />

            {/* Main Content */}
            <div className="relative w-full px-5 py-10 md:px-10 lg:px-20 flex flex-col">

              {/* Logo */}
              <div className="flex justify-center">
                <div className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg border border-slate-200 p-4">
                  <Image
                    src="/assets/images/newLogo-removebg.png"
                    width={180}
                    height={180}
                    alt="SAP PAS Documentation"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Heading */}
              <div className="mt-8 text-center max-w-5xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700 shadow-sm">
                  <i> Plantation Application System </i>
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Dokumentasi
                </h1>

                <div className="mt-4 flex justify-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-600">
                    <FlipWords className="text-emerald-600" words={words} />
                  </div>
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full max-w-3xl mx-auto mt-10">
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-300/20 to-green-300/20 blur-2xl" />

                <div className="relative flex items-center rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-md shadow-xl transition-all duration-300 focus-within:border-emerald-400 focus-within:ring-4 focus-within:ring-emerald-100">

                  <Search className="absolute left-5 h-5 w-5 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Pencaharian..."
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch(search);
                    }}
                    className="w-full bg-transparent py-4 pl-14 pr-20 text-sm md:text-base text-slate-700 placeholder:text-slate-400 focus:outline-none rounded-3xl"
                  />

                  <div className="hidden sm:flex items-center gap-1 mr-4 px-3 py-1.5 text-xs text-slate-500 bg-slate-100 rounded-xl border border-slate-200">
                    ENTER ↵
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-14 w-full">
                <TabsPASDocs tabs={tabs} tabsCard={tabsCard} />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Service;

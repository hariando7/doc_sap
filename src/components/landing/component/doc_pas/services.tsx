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
import { BsWhatsapp } from "react-icons/bs";
import { Search } from "lucide-react";

function Service() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleWhatsAppClick = (productName: string, productPrice: string) => {
    const message = `Halo,  ${productName}. Berikut detail nya:
  - Harga: ${productPrice} Apakah tersedia? Mohon informasinya. Terima kasih!`;
    window.location.href = `https://wa.me/62895637316999?text=${encodeURIComponent(
      message
    )}`;
  };

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

  const doc_spkmobile = [
    // SAP PAS - Gambaran Umum
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
                  src="/assets/images/image_spkmobile2.png"
                  width={200}
                  height={200}
                  alt="SAP PAS Documentation"
                  className="flex m-auto drop-shadow-2xl bg-white rounded-lg p-4 lg:w-1/4"
                />

                <div className="text-center mt-6 text-white">
                  <p className="uppercase tracking-[4px] text-green-100 text-xs md:text-sm mb-3">
                    Plantation Application System
                  </p>

                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    SPK Mobile Documentation
                  </h1>

                  <p className="text-sm md:text-lg text-green-50 max-w-3xl mx-auto leading-8">
                    Untuk Administrasi
                  </p>
                </div>
              </div>
            </div>

            {/* Latar Belakang Masalah */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-10 rounded-full bg-green-600" />

                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg shadow-md">
                  1
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Latar Belakang Masalah
                </h2>
              </div>

              <div className="space-y-5 text-sm md:text-base leading-8 text-slate-700">
                <p className="text-justify">
                  Proses administrasi di lapangan masih dilakukan secara manual
                  sehingga membutuhkan waktu yang cukup lama. Data realisasi SPK dari
                  mandor harus dicek dan diinput kembali oleh bagian administrasi.
                </p>

                <div className="grid gap-4">
                  <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                    <div className="flex items-center justify-center min-w-[32px] h-8 rounded-full bg-green-600 text-white text-sm font-bold">
                      a
                    </div>

                    <p className="text-justify">
                      Proses administrasi masih manual sehingga memerlukan waktu yang
                      lebih lama dalam pengolahan data.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                    <div className="flex items-center justify-center min-w-[32px] h-8 rounded-full bg-green-600 text-white text-sm font-bold">
                      b
                    </div>

                    <p className="text-justify">
                      Risiko kesalahan data cukup tinggi karena adanya kesalahan
                      pembacaan laporan dan input data manual.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                    <div className="flex items-center justify-center min-w-[32px] h-8 rounded-full bg-green-600 text-white text-sm font-bold">
                      c
                    </div>

                    <p className="text-justify">
                      Keterlambatan penyerahan laporan dari mandor menyebabkan proses
                      administrasi menjadi lebih lambat.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                    <div className="flex items-center justify-center min-w-[32px] h-8 rounded-full bg-green-600 text-white text-sm font-bold">
                      d
                    </div>

                    <p className="text-justify">
                      Penggunaan kertas yang berlebihan menyebabkan pemborosan dan
                      meningkatkan risiko pencatatan backdated.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                  <p className="text-green-800 font-medium text-justify">
                    Oleh karena itu, dibutuhkan sistem yang dapat membantu proses
                    administrasi menjadi lebih cepat, akurat, dan efisien.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-10 rounded-full bg-green-600" />

                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg shadow-md">
                  2
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Benefit
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      a
                    </div>

                    <h3 className="font-semibold text-slate-800">
                      Monitoring Lebih Mudah
                    </h3>
                  </div>

                  <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                    Mandor dapat melakukan monitoring absensi tenaga kerja dan
                    pelaporan realisasi hasil kerja secara lebih cepat dan terstruktur.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      b
                    </div>

                    <h3 className="font-semibold text-slate-800">
                      Mengurangi Penggunaan Kertas
                    </h3>
                  </div>

                  <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                    Penggunaan dokumen digital membantu mengurangi pemakaian kertas
                    sehingga biaya operasional menjadi lebih hemat.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-md transition md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      c
                    </div>

                    <h3 className="font-semibold text-slate-800">
                      Proses Administrasi Lebih Efisien
                    </h3>
                  </div>

                  <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                    Proses administrasi menjadi lebih cepat, rapi, dan mengurangi
                    risiko kesalahan input data.
                  </p>
                </div>
              </div>
            </div>

            {/* Cara Kerja Sistem */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-10 rounded-full bg-green-600" />

                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg shadow-md">
                  3
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Cara Kerja Sistem
                </h2>
              </div>

              <div className="relative">
                {/* Line */}
                <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-green-100 rounded-full" />

                <div className="grid md:grid-cols-4 gap-6 relative">
                  {/* Step 1 */}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-lg z-10">
                      1
                    </div>

                    <div className="mt-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 w-full shadow-sm">
                      <h3 className="font-semibold text-slate-800 mb-3">
                        Pembuatan SPK
                      </h3>

                      <p className="text-sm leading-7 text-slate-700">
                        SPK dibuat dan di-release melalui sistem SAP sebagai dasar
                        pekerjaan operasional.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-lg z-10">
                      2
                    </div>

                    <div className="mt-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 w-full shadow-sm">
                      <h3 className="font-semibold text-slate-800 mb-3">
                        Monitoring Mandor
                      </h3>

                      <p className="text-sm leading-7 text-slate-700">
                        Mandor melakukan monitoring absensi dan laporan realisasi
                        pekerjaan secara online.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-lg z-10">
                      3
                    </div>

                    <div className="mt-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 w-full shadow-sm">
                      <h3 className="font-semibold text-slate-800 mb-3">
                        Approval Online
                      </h3>

                      <p className="text-sm leading-7 text-slate-700">
                        Kasie dan Kabag melakukan proses approval laporan secara
                        online melalui sistem.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-lg z-10">
                      4
                    </div>

                    <div className="mt-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 w-full shadow-sm">
                      <h3 className="font-semibold text-slate-800 mb-3">
                        Integrasi ke SAP
                      </h3>

                      <p className="text-sm leading-7 text-slate-700">
                        Laporan realisasi yang sudah disetujui dapat langsung diproses
                        dan diambil oleh sistem SAP.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flowchart SPK Mobile */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              {/* Header */}
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-10 rounded-full bg-green-600" />

                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg shadow-md">
                  4
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Flowchart SPK Mobile
                </h2>
              </div>

              {/* Flow */}
              <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200">
                <Image
                  src="/assets/images/flow_spkmobile.png"
                  width={1600}
                  height={1600}
                  alt="Flowchart SPK Mobile"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Menu pada SPK Mobile */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 shadow-sm">
              {/* Header */}
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-10 rounded-full bg-green-600" />

                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg shadow-md">
                  4
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  Menu pada SPK Mobile
                </h2>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-slate-600 leading-8 text-sm md:text-base">
                  SPK Mobile memiliki beberapa menu utama yang membantu proses
                  monitoring pekerjaan, pelaporan realisasi, absensi tenaga kerja,
                  hingga proses administrasi secara lebih cepat dan terintegrasi.
                </p>
              </div>

              {/* Menu Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {/* Item */}
                <div className="group bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg">
                    📋
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    Perintah Kerja Baru
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    Menampilkan SPK baru yang diterima dari SAP. Angka pada menu
                    menunjukkan jumlah SPK yang tersedia.
                  </p>
                </div>

                {/* Item */}
                <div className="group bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg">
                    🚧
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    Sedang Dikerjakan
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    Menampilkan SPK yang sedang dikerjakan dan laporan realisasinya
                    belum disubmit oleh mandor.
                  </p>
                </div>

                {/* Item */}
                <div className="group bg-gradient-to-br from-yellow-50 to-white border border-yellow-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg">
                    ⏳
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    Menunggu Persetujuan
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    SPK yang sudah disubmit mandor dan sedang menunggu approval dari
                    Kasie dan Kabag.
                  </p>
                </div>

                {/* Item */}
                <div className="group bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-green-600 text-white flex items-center justify-center text-2xl mb-4 shadow-lg">
                    ✅
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    Sudah Disetujui
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    Laporan realisasi SPK yang sudah disetujui dan siap diproses ke
                    dalam sistem SAP.
                  </p>
                </div>

                {/* Item */}
                <div className="group bg-gradient-to-br from-rose-50 to-white border border-rose-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg">
                    🔄
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    Permintaan Revisi
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    Menampilkan SPK yang perlu diperbaiki karena laporan realisasi
                    belum disetujui oleh Kasie atau Kabag.
                  </p>
                </div>

                {/* Item */}
                <div className="group bg-gradient-to-br from-violet-50 to-white border border-violet-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-violet-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg">
                    🖥️
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    Sudah Diproses Administrasi
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    Laporan realisasi yang sudah diproses oleh bagian administrasi
                    melalui SAP.
                  </p>
                </div>

                {/* Item */}
                <div className="group bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg">
                    👷
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    Absensi Harian
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    Menu untuk melakukan absensi tenaga kerja secara harian langsung
                    melalui aplikasi.
                  </p>
                </div>

                {/* Item */}
                <div className="group bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg">
                    📊
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    Summary Rekap
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    Menampilkan laporan rekap upah tenaga kerja dan hasil pekerjaan
                    secara ringkas.
                  </p>
                </div>
              </div>
            </div>

            {/* Akses SAP PAS */}
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

            {/* Akses SAP PAS */}
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg">
                    5
                  </div>

                  <div>
                    <p className="text-sm font-medium text-green-700 uppercase tracking-wider">
                      SAP Documentation
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                      Akses SAP PAS
                    </h3>
                  </div>
                </div>

                {/* Intro */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-3xl p-6 mb-8">
                  <p className="text-slate-700 leading-8 text-sm md:text-base text-justify">
                    <span className="font-semibold text-green-700">
                      SAP Plantation Application System (PAS)
                    </span>{" "}
                    merupakan sistem SAP yang digunakan untuk mendukung kegiatan
                    operasional di area plantation. Sistem ini membantu proses
                    administrasi, pencatatan, dan pelaporan agar lebih terstruktur,
                    terintegrasi, dan mudah dimonitor.
                  </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-5">
                  {/* Step 1 */}
                  <div className="group bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-xl shadow-md">
                        💻
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                          Step 01
                        </p>

                        <h4 className="text-lg font-bold text-slate-800">
                          Buka SAP GUI
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      User membuka aplikasi SAP GUI kemudian login menggunakan User
                      ID dan password yang telah diberikan.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="group bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl shadow-md">
                        🔑
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                          Step 02
                        </p>

                        <h4 className="text-lg font-bold text-slate-800">
                          Masuk ke SAP
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      Setelah berhasil login, user akan masuk ke halaman utama SAP
                      untuk mulai mengakses sistem PAS.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="group bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center text-xl shadow-md">
                        ⚙️
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                          Step 03
                        </p>

                        <h4 className="text-lg font-bold text-slate-800">
                          Jalankan TCODE
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      User memasukkan Transaction Code (TCODE) pada command field,
                      kemudian sistem akan menampilkan halaman utama SAP PAS.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200 mt-4">
                  <Image
                    src="/assets/images/flow_pas.png"
                    width={1600}
                    height={1600}
                    alt="Flowchart SPK Mobile"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Footer Note */}
                <div className="mt-8 bg-slate-50 border border-slate-200 rounded-3xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-xl">
                      📌
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">
                        Aktivitas pada SAP PAS
                      </h4>

                      <p className="text-sm md:text-base leading-7 text-slate-600 text-justify">
                        Setelah masuk ke SAP PAS, pengguna dapat melakukan berbagai
                        aktivitas administrasi seperti input data, edit data,
                        monitoring laporan, serta proses operasional lainnya secara
                        terintegrasi.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ZPAS501 */}
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg">
                    2
                  </div>

                  <div>
                    <p className="text-sm font-medium text-green-700 uppercase tracking-wider">
                      PAS Documentation
                    </p>

                    <h3 id="ZPAS501" className="text-2xl md:text-3xl font-bold text-slate-800">
                      ZPAS501 — Membuat RPK
                    </h3>
                  </div>
                </div>

                {/* Hero Description */}
                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-white border border-green-100 rounded-3xl p-6 md:p-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="hidden md:flex w-14 h-14 rounded-2xl bg-green-600 text-white items-center justify-center text-2xl shadow-lg">
                      📄
                    </div>

                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-4">
                        Mengenal RPK di SPK Mobile
                      </h4>

                      <p className="text-slate-700 leading-8 text-sm md:text-base text-justify">
                        <span className="font-semibold text-green-700">
                          RPK (Rencana Pelaksanaan Kegiatan)
                        </span>{" "}
                        merupakan dokumen perencanaan kerja yang digunakan sebagai
                        dasar dalam pengaturan aktivitas operasional. RPK biasanya
                        dibuat oleh Kawil atau Kasie dan dikoordinasikan bersama
                        bagian administrasi sebelum pekerjaan dilaksanakan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Information Grid */}
                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  {/* Card 1 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-xl shadow-md">
                        📅
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Periode RPK
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      RPK memiliki fleksibilitas periode kerja, mulai dari mingguan
                      hingga bulanan, sesuai kebutuhan operasional di lapangan.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl shadow-md">
                        📝
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Dasar Pembuatan SPK
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      Satu RPK dapat digunakan untuk beberapa SPK. Tanpa adanya RPK,
                      SPK tidak dapat diterbitkan karena RPK menjadi dasar utama
                      pembentukan pekerjaan.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-violet-500 text-white flex items-center justify-center text-xl shadow-md">
                        👷
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Acuan Tenaga Kerja
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      RPK membantu tenaga kerja menjalankan aktivitas sesuai dengan
                      perencanaan kerja yang telah ditentukan perusahaan.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl shadow-md">
                        🏢
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Cakupan Aktivitas
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      Aktivitas pada RPK tidak hanya mencakup operasional kebun,
                      tetapi juga warehouse, pekerjaan teknis, dan aktivitas
                      pendukung lainnya.
                    </p>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-xl">
                      ⚙️
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">
                        TCODE ZPAS501
                      </h4>

                      <p className="text-sm md:text-base leading-7 text-slate-600 text-justify">
                        Proses pembuatan RPK dilakukan melalui Transaction Code
                        <span className="font-semibold text-green-700">
                          {" "}
                          ZPAS501
                        </span>
                        . Setelah TCODE dijalankan, user dapat mulai membuat,
                        mengelola, dan melakukan monitoring data RPK sesuai kebutuhan
                        operasional.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gambar RPK */}
                <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200 mt-4">
                  <Image
                    src="/assets/images/rpk.png"
                    width={1600}
                    height={1600}
                    alt="Flowchart SPK Mobile"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Video Membuat RPK */}
                <div className="mt-6 bg-gradient-to-r from-red-50 via-white to-red-50 border border-red-100 rounded-3xl p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Left Content */}
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-red-500 text-white flex items-center justify-center text-2xl shadow-lg">
                        ▶️
                      </div>

                      <div>
                        <p className="text-sm font-medium uppercase tracking-wider text-red-500 mb-1">
                          Video Tutorial
                        </p>

                        <h4 className="text-xl font-bold text-slate-800 mb-2">
                          ZPAS501 - Cara Membuat RPK
                        </h4>

                        <p className="text-sm md:text-base leading-7 text-slate-600 text-justify max-w-2xl">
                          Semua Fungsi ZPAS501 ada pada video
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0">
                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl"
                      >
                        <span className="text-2xl">🎥</span>

                        <div className="text-left">
                          <p className="text-xs opacity-80">
                            Lihat Tutorial
                          </p>

                          <p className="text-sm font-bold">
                            Open YouTube
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Embedded Video */}
                  <div className="mt-8 max-w-2xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="Tutorial ZPAS220"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ZPAS502 */}
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg">
                    3
                  </div>

                  <div>
                    <p className="text-sm font-medium text-green-700 uppercase tracking-wider">
                      PAS Documentation
                    </p>

                    <h3 id="ZPAS502" className="text-2xl md:text-3xl font-bold text-slate-800">
                      ZPAS502 — Membuat SPK
                    </h3>
                  </div>
                </div>

                {/* Hero Description */}
                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-white border border-green-100 rounded-3xl p-6 md:p-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="hidden md:flex w-14 h-14 rounded-2xl bg-green-600 text-white items-center justify-center text-2xl shadow-lg">
                      📋
                    </div>

                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-4">
                        Mengenal SPK di SPK Mobile
                      </h4>

                      <p className="text-slate-700 leading-8 text-sm md:text-base text-justify">
                        <span className="font-semibold text-green-700">
                          SPK (Surat Perintah Kerja)
                        </span>{" "}
                        merupakan dokumen instruksi kerja yang dibuat berdasarkan RPK
                        sebagai dasar pelaksanaan operasional di lapangan. SPK membantu
                        mengubah rencana kerja menjadi aktivitas yang lebih detail,
                        terarah, dan siap dijalankan oleh tenaga kerja.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Information Grid */}
                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  {/* Card 1 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-xl shadow-md">
                        📝
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Instruksi Kerja
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      SPK berisi rincian pekerjaan seperti aktivitas, lokasi kerja,
                      target pekerjaan, dan kebutuhan sumber daya operasional.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl shadow-md">
                        🔗
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Terhubung dengan RPK
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      SPK dibuat berdasarkan RPK. Satu RPK dapat menghasilkan beberapa
                      SPK sesuai kebutuhan pekerjaan di lapangan.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-violet-500 text-white flex items-center justify-center text-xl shadow-md">
                        👷
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Acuan Mandor dan TK
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      SPK menjadi acuan utama bagi mandor dan tenaga kerja dalam
                      menjalankan aktivitas harian secara terstruktur dan terkontrol.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl shadow-md">
                        📱
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Integrasi SPK Mobile
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      SPK terintegrasi dengan SPK Mobile sehingga proses pelaporan dan
                      monitoring pekerjaan dapat dilakukan langsung secara online.
                    </p>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-xl">
                      ⚙️
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">
                        TCODE ZPAS502
                      </h4>

                      <p className="text-sm md:text-base leading-7 text-slate-600 text-justify">
                        Proses pembuatan SPK dilakukan melalui Transaction Code
                        <span className="font-semibold text-green-700">
                          {" "}
                          ZPAS502
                        </span>
                        . Setelah TCODE dijalankan, user dapat membuat, mengelola,
                        dan melakukan monitoring SPK sesuai kebutuhan operasional.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gambar SPK */}
                <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200 mt-6 shadow-lg">
                  <Image
                    src="/assets/images/spk.png"
                    width={1600}
                    height={1600}
                    alt="TCODE ZPAS502"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Video Tutorial */}
                <div className="mt-6 bg-gradient-to-r from-red-50 via-white to-red-50 border border-red-100 rounded-3xl p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Left Content */}
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-red-500 text-white flex items-center justify-center text-2xl shadow-lg">
                        ▶️
                      </div>

                      <div>
                        <p className="text-sm font-medium uppercase tracking-wider text-red-500 mb-1">
                          Video Tutorial
                        </p>

                        <h4 className="text-xl font-bold text-slate-800 mb-2">
                          ZPAS502 - Cara Membuat SPK
                        </h4>

                        <p className="text-sm md:text-base leading-7 text-slate-600 text-justify max-w-2xl">
                          Semua Fungsi ZPAS502 ada pada video
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0">
                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl"
                      >
                        <span className="text-2xl">🎥</span>

                        <div className="text-left">
                          <p className="text-xs opacity-80">
                            Lihat Tutorial
                          </p>

                          <p className="text-sm font-bold">
                            Open YouTube
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Embedded Video */}
                  <div className="mt-8 max-w-2xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="Tutorial ZPAS220"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ZPAS220 */}
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg">
                    4
                  </div>

                  <div>
                    <p className="text-sm font-medium text-green-700 uppercase tracking-wider">
                      PAS Documentation
                    </p>

                    <h3 id="ZPAS220" className="text-2xl md:text-3xl font-bold text-slate-800">
                      ZPAS220 — Report Absensi
                    </h3>
                  </div>
                </div>

                {/* Hero Description */}
                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-white border border-green-100 rounded-3xl p-6 md:p-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="hidden md:flex w-14 h-14 rounded-2xl bg-green-600 text-white items-center justify-center text-2xl shadow-lg">
                      👷
                    </div>

                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-4">
                        Monitoring Data Absensi Tenaga Kerja
                      </h4>

                      <p className="text-slate-700 leading-8 text-sm md:text-base text-justify">
                        Sebelum melakukan proses{" "}
                        <span className="font-semibold text-green-700">
                          Get Data SPK Mobile ke SAP
                        </span>
                        , langkah pertama yang harus dipastikan adalah data absensi
                        tenaga kerja dan mandor sudah tersedia pada{" "}
                        <span className="font-semibold text-green-700">
                          TCODE ZPAS220
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                {/* Flow Process */}
                <div className="grid md:grid-cols-3 gap-5 mb-8">
                  {/* Step 1 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-xl shadow-md">
                        📲
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                          Step 01
                        </p>

                        <h4 className="text-lg font-bold text-slate-800">
                          Data Framsys
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      Data absensi tenaga kerja diperoleh dari sistem Framsys yang
                      digunakan untuk pencatatan kehadiran.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl shadow-md">
                        🔄
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                          Step 02
                        </p>

                        <h4 className="text-lg font-bold text-slate-800">
                          Send to SAP
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      Administrasi dapat melakukan proses{" "}
                      <span className="font-semibold">Send to SAP</span> dari sistem
                      Framsys agar data absensi masuk ke SAP-PAS.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl shadow-md">
                        ✅
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                          Step 03
                        </p>

                        <h4 className="text-lg font-bold text-slate-800">
                          Validasi Absensi
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      Jika data tenaga kerja dan mandor sudah muncul pada report
                      absensi ZPAS220, maka proses selanjutnya dapat dilakukan.
                    </p>
                  </div>
                </div>

                {/* Important Note */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-white flex items-center justify-center text-xl shadow-md">
                      ⚠️
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">
                        Penting Sebelum Get Data
                      </h4>

                      <p className="text-sm md:text-base leading-7 text-slate-600 text-justify">
                        Pastikan seluruh data absensi tenaga kerja dan mandor sudah
                        tersedia pada ZPAS220 sebelum melakukan proses Get Data SPK
                        Mobile ke SAP untuk menghindari kegagalan proses administrasi.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
                  <Image
                    src="/assets/images/ZPAS220.png"
                    width={1600}
                    height={1600}
                    alt="ZPAS220 Report Absensi"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Video Tutorial */}
                <div className="mt-6 bg-gradient-to-r from-red-50 via-white to-red-50 border border-red-100 rounded-3xl p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Left Content */}
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-red-500 text-white flex items-center justify-center text-2xl shadow-lg">
                        ▶️
                      </div>

                      <div>
                        <p className="text-sm font-medium uppercase tracking-wider text-red-500 mb-1">
                          Video Tutorial
                        </p>

                        <h4 className="text-xl font-bold text-slate-800 mb-2">
                          Penggunaan ZPAS220
                        </h4>

                        <p className="text-sm md:text-base leading-7 text-slate-600 text-justify max-w-2xl">
                          Dokumentasi penggunaan ZPAS220 tersedia pada video tutorial
                          berikut untuk membantu memahami proses monitoring dan
                          validasi absensi tenaga kerja.
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0">
                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl"
                      >
                        <span className="text-2xl">🎥</span>

                        <div className="text-left">
                          <p className="text-xs opacity-80">
                            Lihat Tutorial
                          </p>

                          <p className="text-sm font-bold">
                            Open YouTube
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Embedded Video */}
                  <div className="mt-8 max-w-2xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="Tutorial ZPAS220"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ZPAS601D_M */}
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg">
                    5
                  </div>

                  <div>
                    <p className="text-sm font-medium text-green-700 uppercase tracking-wider">
                      PAS Documentation
                    </p>

                    <h3 id="ZPAS601D_M" className="text-2xl md:text-3xl font-bold text-slate-800">
                      ZPAS601D_M — Realisasi SPK Mobile to SAP
                    </h3>
                  </div>
                </div>

                {/* Hero Description */}
                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-white border border-green-100 rounded-3xl p-6 md:p-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="hidden md:flex w-14 h-14 rounded-2xl bg-green-600 text-white items-center justify-center text-2xl shadow-lg">
                      🔄
                    </div>

                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-4">
                        Realisasi SPK Mobile ke SAP
                      </h4>

                      <p className="text-slate-700 leading-8 text-sm md:text-base text-justify">
                        Pada menu ini akan dijelaskan proses pengambilan data dari
                        SPK Mobile menuju SAP, mulai dari proses Get Data,
                        revisi SPK, hingga generate laporan operasional seperti
                        LKH dan LKB. Penjelasan detail setiap proses dapat dilihat
                        melalui video tutorial pada masing-masing menu.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Process Timeline */}
                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-2xl shadow-lg">
                        📥
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
                            Step 01
                          </span>

                          <h4 className="text-xl font-bold text-slate-800">
                            Get Data SPK Mobile
                          </h4>
                        </div>

                        <p className="text-sm md:text-base leading-7 text-slate-600 text-justify mb-4">
                          Proses ini dilakukan apabila status SPK pada SPK Mobile
                          sudah <span className="font-semibold">Disetujui</span>.
                          Tombol <span className="font-semibold">Get Data</span>{" "}
                          digunakan untuk mengambil data realisasi pekerjaan dari
                          SPK Mobile menuju SAP-PAS.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                            <p className="font-semibold text-slate-800 mb-2">
                              Fungsi Menu
                            </p>

                            <ul className="space-y-2 text-sm text-slate-600">
                              <li>• View Data LKH</li>
                              <li>• View Data LKB</li>
                              <li>• View Data LHO</li>
                              <li>• Save Data ke SAP</li>
                            </ul>
                          </div>

                          <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100">
                            <p className="font-semibold text-slate-800 mb-2">
                              Hasil Proses
                            </p>

                            <p className="text-sm leading-7 text-slate-600">
                              Setelah Execute dilakukan, sistem akan menampilkan data
                              SPK beserta detail laporan yang dapat diproses lebih
                              lanjut ke SAP.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-2xl shadow-lg">
                        🔄
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
                            Step 02
                          </span>

                          <h4 className="text-xl font-bold text-slate-800">
                            Cancel Get / Revisi SPK Mobile
                          </h4>
                        </div>

                        <p className="text-sm md:text-base leading-7 text-slate-600 text-justify">
                          Proses ini dilakukan apabila SPK sudah berada pada status
                          proses administrasi atau sudah dilakukan Get Data.
                          Setelah proses Cancel Get dilakukan, status SPK akan
                          berubah menjadi{" "}
                          <span className="font-semibold text-rose-600">
                            Permintaan Revisi
                          </span>
                          .
                        </p>

                        <div className="mt-4 bg-rose-50 border border-rose-100 rounded-2xl p-4">
                          <p className="text-sm leading-7 text-slate-600">
                            Mandor dapat kembali membuka SPK melalui menu revisi
                            untuk melakukan perbaikan data sesuai realisasi pekerjaan
                            yang sebenarnya.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="grid md:grid-cols-3 gap-5">
                    {/* Generate LKH */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-lg mb-5">
                        📄
                      </div>

                      <h4 className="text-lg font-bold text-slate-800 mb-3">
                        Generate LKH
                      </h4>

                      <p className="text-sm leading-7 text-slate-600 text-justify">
                        Digunakan untuk membuat laporan LKH yang berisi data upah
                        tenaga kerja dan mandor.
                      </p>
                    </div>

                    {/* Generate LKB */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-lg mb-5">
                        🧾
                      </div>

                      <h4 className="text-lg font-bold text-slate-800 mb-3">
                        Generate LKB
                      </h4>

                      <p className="text-sm leading-7 text-slate-600 text-justify">
                        Digunakan untuk membuat laporan LKB yang berisi data
                        permintaan bahan dan material pekerjaan.
                      </p>
                    </div>

                    {/* Report Summary */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-violet-500 text-white flex items-center justify-center text-2xl shadow-lg mb-5">
                        📊
                      </div>

                      <h4 className="text-lg font-bold text-slate-800 mb-3">
                        Report Summary
                      </h4>

                      <p className="text-sm leading-7 text-slate-600 text-justify">
                        Menampilkan summary pekerjaan seperti data upah, lokasi,
                        tenaga kerja, dan detail pekerjaan lainnya.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200 mt-8 shadow-lg">
                  <Image
                    src="/assets/images/ZPAS601D_M.png"
                    width={1600}
                    height={1600}
                    alt="ZPAS601D_M"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Video Tutorial */}
                <div className="mt-6 bg-gradient-to-r from-red-50 via-white to-red-50 border border-red-100 rounded-3xl p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Left Content */}
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-red-500 text-white flex items-center justify-center text-2xl shadow-lg">
                        ▶️
                      </div>

                      <div>
                        <p className="text-sm font-medium uppercase tracking-wider text-red-500 mb-1">
                          Video Tutorial
                        </p>

                        <h4 className="text-xl font-bold text-slate-800 mb-2">
                          ZPAS601D_M — Realisasi SPK Mobile to SAP
                        </h4>

                        <p className="text-sm md:text-base leading-7 text-slate-600 text-justify max-w-2xl">
                          Semua fungsi pada ZPAS601D_M sudah tersedia pada Video Youtube
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0">
                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl"
                      >
                        <span className="text-2xl">🎥</span>

                        <div className="text-left">
                          <p className="text-xs opacity-80">
                            Lihat Tutorial
                          </p>

                          <p className="text-sm font-bold">
                            Open YouTube
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Embedded Video */}
                  <div className="mt-8 max-w-2xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="Tutorial ZPAS220"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ZPASR33M */}
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg">
                    6
                  </div>

                  <div>
                    <p className="text-sm font-medium text-green-700 uppercase tracking-wider">
                      PAS Documentation
                    </p>

                    <h3 id="ZPASR33M" className="text-2xl md:text-3xl font-bold text-slate-800">
                      ZPASR33M — Send Data Tenaga Kerja ke SPK Mobile
                    </h3>
                  </div>
                </div>

                {/* Hero Description */}
                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-white border border-green-100 rounded-3xl p-6 md:p-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="hidden md:flex w-14 h-14 rounded-2xl bg-green-600 text-white items-center justify-center text-2xl shadow-lg">
                      👷
                    </div>

                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-4">
                        Sinkronisasi Data Tenaga Kerja
                      </h4>

                      <p className="text-slate-700 leading-8 text-sm md:text-base text-justify">
                        Menu{" "}
                        <span className="font-semibold text-green-700">
                          ZPASR33M
                        </span>{" "}
                        digunakan untuk melakukan sinkronisasi data tenaga kerja dari
                        SAP-PAS ke SPK Mobile sehingga data tenaga kerja pada aplikasi
                        mobile selalu sesuai dengan data terbaru pada sistem SAP.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Information Grid */}
                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  {/* Card 1 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-xl shadow-md">
                        ➕
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Menambah Tenaga Kerja
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      Digunakan untuk mengirim data tenaga kerja baru dari SAP-PAS ke
                      SPK Mobile agar dapat digunakan dalam proses operasional dan
                      pelaporan pekerjaan.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-xl shadow-md">
                        ➖
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Menghapus Tenaga Kerja
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      Digunakan untuk menghapus tenaga kerja dari bawahan mandor
                      apabila sudah pindah mandor, tidak bekerja lagi, atau terdapat
                      perubahan data operasional.
                    </p>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-xl">
                      📌
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-3">
                        Fungsi Utama ZPASR33M
                      </h4>

                      <ul className="space-y-3 text-sm md:text-base text-slate-600 leading-7">
                        <li>
                          • Sinkronisasi data tenaga kerja dari SAP ke SPK Mobile
                        </li>

                        <li>
                          • Memastikan data tenaga kerja pada aplikasi mobile selalu
                          terbaru
                        </li>

                        <li>
                          • Membantu proses administrasi dan monitoring tenaga kerja
                        </li>

                        <li>
                          • Mendukung validasi data tenaga kerja pada proses
                          operasional lapangan
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
                  <Image
                    src="/assets/images/ZPASR33M.png"
                    width={1600}
                    height={1600}
                    alt="ZPASR33M"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Video Tutorial */}
                <div className="mt-6 bg-gradient-to-r from-red-50 via-white to-red-50 border border-red-100 rounded-3xl p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Left Content */}
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-red-500 text-white flex items-center justify-center text-2xl shadow-lg">
                        ▶️
                      </div>

                      <div>
                        <p className="text-sm font-medium uppercase tracking-wider text-red-500 mb-1">
                          Video Tutorial
                        </p>

                        <h4 className="text-xl font-bold text-slate-800 mb-2">
                          Penggunaan ZPASR33M
                        </h4>

                        <p className="text-sm md:text-base leading-7 text-slate-600 text-justify max-w-2xl">
                          Video berikut menjelaskan proses penggunaan ZPASR33M mulai
                          dari pengiriman data tenaga kerja hingga sinkronisasi data
                          ke SPK Mobile.
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0">
                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-medium px-4 py-3 rounded-xl shadow-md hover:shadow-lg"
                      >
                        <span className="text-lg">🎥</span>

                        <div className="text-left leading-tight">
                          <p className="text-[10px] opacity-80">
                            Lihat Tutorial
                          </p>

                          <p className="text-xs font-semibold">
                            Open YouTube
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Embedded Video */}
                  <div className="mt-8 max-w-2xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="Tutorial ZPASR33M"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ZPASR32M */}
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg">
                    7
                  </div>

                  <div>
                    <p className="text-sm font-medium text-green-700 uppercase tracking-wider">
                      PAS Documentation
                    </p>

                    <h3 id="ZPASR32M" className="text-2xl md:text-3xl font-bold text-slate-800">
                      ZPASR32M — Send Data Aktivitas ke SPK Mobile
                    </h3>
                  </div>
                </div>

                {/* Hero Description */}
                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-white border border-green-100 rounded-3xl p-6 md:p-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="hidden md:flex w-14 h-14 rounded-2xl bg-green-600 text-white items-center justify-center text-2xl shadow-lg">
                      📋
                    </div>

                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-4">
                        Sinkronisasi Data Aktivitas
                      </h4>

                      <p className="text-slate-700 leading-8 text-sm md:text-base text-justify">
                        Menu{" "}
                        <span className="font-semibold text-green-700">
                          ZPASR32M
                        </span>{" "}
                        digunakan untuk mengirim data aktivitas terbaru dari SAP-PAS
                        ke SPK Mobile sehingga aktivitas pekerjaan pada aplikasi
                        mobile selalu sesuai dengan data operasional yang ada di SAP.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Information Grid */}
                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  {/* Card 1 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-xl shadow-md">
                        ➕
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Menambah Aktivitas Baru
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      Digunakan untuk menambahkan data aktivitas baru dari SAP-PAS
                      ke SPK Mobile agar dapat digunakan pada proses operasional
                      lapangan.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl shadow-md">
                        🔄
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Sinkronisasi Aktivitas
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      Membantu memastikan data aktivitas pada SPK Mobile selalu
                      sesuai dengan data terbaru yang terdapat pada SAP-PAS.
                    </p>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-xl">
                      📌
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-3">
                        Fungsi Utama ZPASR32M
                      </h4>

                      <ul className="space-y-3 text-sm md:text-base text-slate-600 leading-7">
                        <li>
                          • Mengirim data aktivitas terbaru ke SPK Mobile
                        </li>

                        <li>
                          • Menyesuaikan aktivitas pekerjaan dengan data SAP-PAS
                        </li>

                        <li>
                          • Mendukung proses operasional dan pelaporan pekerjaan
                        </li>

                        <li>
                          • Memastikan aktivitas pada SPK Mobile selalu up to date
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
                  <Image
                    src="/assets/images/ZPASR32M.png"
                    width={1600}
                    height={1600}
                    alt="ZPASR32M"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Video Tutorial */}
                <div className="mt-6 bg-gradient-to-r from-red-50 via-white to-red-50 border border-red-100 rounded-3xl p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Left Content */}
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-red-500 text-white flex items-center justify-center text-2xl shadow-lg">
                        ▶️
                      </div>

                      <div>
                        <p className="text-sm font-medium uppercase tracking-wider text-red-500 mb-1">
                          Video Tutorial
                        </p>

                        <h4 className="text-xl font-bold text-slate-800 mb-2">
                          Penggunaan ZPASR32M
                        </h4>

                        <p className="text-sm md:text-base leading-7 text-slate-600 text-justify max-w-2xl">
                          Video berikut menjelaskan proses penggunaan ZPASR32M mulai
                          dari pengiriman data aktivitas hingga sinkronisasi data ke
                          SPK Mobile.
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0">
                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-medium px-4 py-3 rounded-xl shadow-md hover:shadow-lg"
                      >
                        <span className="text-lg">🎥</span>

                        <div className="text-left leading-tight">
                          <p className="text-[10px] opacity-80">
                            Lihat Tutorial
                          </p>

                          <p className="text-xs font-semibold">
                            Open YouTube
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Embedded Video */}
                  <div className="mt-8 max-w-2xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="Tutorial ZPASR32M"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ZPASR31M */}
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg">
                    8
                  </div>

                  <div>
                    <p className="text-sm font-medium text-green-700 uppercase tracking-wider">
                      PAS Documentation
                    </p>

                    <h3 id="ZPASR31M" className="text-2xl md:text-3xl font-bold text-slate-800">
                      ZPASR31M — Send Data Lokasi ke SPK Mobile
                    </h3>
                  </div>
                </div>

                {/* Hero Description */}
                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-white border border-green-100 rounded-3xl p-6 md:p-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="hidden md:flex w-14 h-14 rounded-2xl bg-green-600 text-white items-center justify-center text-2xl shadow-lg">
                      📍
                    </div>

                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-4">
                        Sinkronisasi Data Lokasi
                      </h4>

                      <p className="text-slate-700 leading-8 text-sm md:text-base text-justify">
                        Menu{" "}
                        <span className="font-semibold text-green-700">
                          ZPASR31M
                        </span>{" "}
                        digunakan untuk mengirim data lokasi terbaru dari SAP-PAS ke
                        SPK Mobile sehingga data lokasi pekerjaan pada aplikasi mobile
                        selalu sesuai dengan data operasional pada sistem SAP.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Information Grid */}
                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  {/* Card 1 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-xl shadow-md">
                        ➕
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Menambah Lokasi Baru
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      Digunakan untuk mengirim data lokasi baru dari SAP-PAS ke SPK
                      Mobile agar lokasi pekerjaan dapat digunakan pada proses
                      operasional lapangan.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl shadow-md">
                        🔄
                      </div>

                      <h4 className="text-lg font-bold text-slate-800">
                        Sinkronisasi Lokasi
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 text-justify">
                      Membantu memastikan data lokasi pada SPK Mobile selalu sesuai
                      dengan data terbaru yang tersedia pada SAP-PAS.
                    </p>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-xl">
                      📌
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-3">
                        Fungsi Utama ZPASR31M
                      </h4>

                      <ul className="space-y-3 text-sm md:text-base text-slate-600 leading-7">
                        <li>
                          • Mengirim data lokasi terbaru ke SPK Mobile
                        </li>

                        <li>
                          • Memastikan lokasi pekerjaan sesuai dengan SAP-PAS
                        </li>

                        <li>
                          • Mendukung proses operasional dan monitoring pekerjaan
                        </li>

                        <li>
                          • Membantu sinkronisasi data lokasi secara otomatis
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
                  <Image
                    src="/assets/images/ZPASR31M.png"
                    width={1600}
                    height={1600}
                    alt="ZPASR31M"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Video Tutorial */}
                <div className="mt-6 bg-gradient-to-r from-red-50 via-white to-red-50 border border-red-100 rounded-3xl p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Left Content */}
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-red-500 text-white flex items-center justify-center text-2xl shadow-lg">
                        ▶️
                      </div>

                      <div>
                        <p className="text-sm font-medium uppercase tracking-wider text-red-500 mb-1">
                          Video Tutorial
                        </p>

                        <h4 className="text-xl font-bold text-slate-800 mb-2">
                          Penggunaan ZPASR31M
                        </h4>

                        <p className="text-sm md:text-base leading-7 text-slate-600 text-justify max-w-2xl">
                          Video berikut menjelaskan proses penggunaan ZPASR31M mulai
                          dari pengiriman data lokasi hingga sinkronisasi data ke SPK
                          Mobile.
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0">
                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-medium px-4 py-3 rounded-xl shadow-md hover:shadow-lg"
                      >
                        <span className="text-lg">🎥</span>

                        <div className="text-left leading-tight">
                          <p className="text-[10px] opacity-80">
                            Lihat Tutorial
                          </p>

                          <p className="text-xs font-semibold">
                            Open YouTube
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Embedded Video */}
                  <div className="mt-8 max-w-2xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="Tutorial ZPASR31M"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
  const doc_sap = [
    // SAP PAS - Gambaran Umum
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
    {
      title: "SAP 2",
      description: (
        <>
          <div className="space-y-6">
            {/* Hero Section */}
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

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Blur */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                    5
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                      Struktur Dasar SAP
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Card 1 */}
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">
                      Informasi Umum
                    </h3>

                    <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                      Setiap data yang diinput akan saling terhubung antar bagian dalam
                      perusahaan. Sebagai contoh, data yang diinput oleh administrasi dapat
                      digunakan oleh bagian lain seperti Finance, Warehouse, maupun
                      manajemen.
                    </p>

                    <p className="text-sm md:text-base leading-8 text-slate-700 text-justify mt-3">
                      Administrasi tidak perlu memahami SAP secara mendalam. Cukup memahami
                      dasar penggunaan seperti TCODE dan alur kerja operasional yang
                      digunakan sehari-hari.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">
                      Module SAP
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="rounded-2xl bg-green-50 border border-green-100 p-4">
                        <h4 className="font-bold text-green-700 mb-2">MM</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Material Management untuk pengelolaan barang dan material.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4">
                        <h4 className="font-bold text-blue-700 mb-2">FI</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Financial Accounting untuk pengelolaan data keuangan.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
                        <h4 className="font-bold text-orange-700 mb-2">SD</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Sales and Distribution untuk proses penjualan dan distribusi.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl bg-slate-900 p-4">
                      <p className="text-sm md:text-base leading-7 text-slate-200">
                        Dalam panduan ini, pembahasan akan difokuskan pada module yang
                        digunakan dalam{" "}
                        <span className="font-semibold text-green-400">
                          PAS (Plantation Application System)
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center text-xl">
                          💻
                        </div>

                        <h3 className="text-lg font-semibold text-slate-800">
                          SAP GUI
                        </h3>
                      </div>

                      <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                        SAP diakses melalui aplikasi yang disebut{" "}
                        <span className="font-semibold text-green-700">
                          SAP GUI (Graphical User Interface)
                        </span>
                        , yaitu tampilan utama untuk menjalankan aktivitas di dalam sistem
                        SAP.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center text-xl">
                          ⚡
                        </div>

                        <h3 className="text-lg font-semibold text-slate-800">
                          Transaction Code (TCODE)
                        </h3>
                      </div>

                      <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                        TCODE merupakan kode singkat (shortcut) yang digunakan untuk
                        mengakses menu atau fitur tertentu di SAP dengan lebih cepat dan
                        efisien.
                      </p>
                    </div>
                  </div>

                  {/* Flow */}
                  <div className="rounded-3xl border border-green-100 bg-gradient-to-r from-green-600 to-emerald-500 p-6 md:p-8 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                        🔄
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold">
                        Alur Dasar Penggunaan SAP
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                      {[
                        "Login SAP",
                        "Input TCODE",
                        "Input / Lihat Data",
                        "Save Data",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-center"
                        >
                          <div className="w-10 h-10 rounded-full bg-white text-green-700 flex items-center justify-center font-bold mx-auto mb-3">
                            {index + 1}
                          </div>

                          <p className="text-sm md:text-base font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
  const doc_pas = [
    // PAS 1
    {
      title: "PAS 1",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("", "_blank")
            }
            src="/assets/images/khitan1.png"
            alt="tidak ada gambar"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          <Image
            src="/assets/images/comingsoon.png"
            width={200}
            height={200}
            alt="SAP PAS Documentation"
            className="flex m-auto drop-shadow-2xl bg-white rounded-lg p-4 lg:w-1/4"
          />
        </>
      ),
    },

    // PAS 2
    {
      title: "PAS 2",
      description: (
        <>
        </>
      ),
    },

    // PAS 3
    {
      title: "PAS 3",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("", "_blank")
            }
            src="/assets/images/khitan3.png"
            alt="tidak ada gambar"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
        </>
      ),
    },
  ];
  const doc_rpk = [
    // PAS 1
    {
      title: "PAS 1",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("", "_blank")
            }
            src="/assets/images/khitan1.png"
            alt="tidak ada gambar"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
        </>
      ),
    },

    // PAS 2
    {
      title: "PAS 2",
      description: (
        <>
        </>
      ),
    },

    // PAS 3
    {
      title: "PAS 3",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("", "_blank")
            }
            src="/assets/images/khitan3.png"
            alt="tidak ada gambar"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
        </>
      ),
    },
  ];
  const doc_spk = [
    // PAS 1
    {
      title: "PAS 1",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("", "_blank")
            }
            src="/assets/images/khitan1.png"
            alt="tidak ada gambar"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
          
        </>
      ),
    },

    // PAS 2
    {
      title: "PAS 2",
      description: (
        <>
        </>
      ),
    },

    // PAS 3
    {
      title: "PAS 3",
      header: (
        <>
          <Image
            onClick={() =>
              window.open("", "_blank")
            }
            src="/assets/images/khitan3.png"
            alt="tidak ada gambar"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      description: (
        <>
        </>
      ),
    },
  ];
  const doc_lkh = [
    // SAP PAS - Gambaran Umum
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
    {
      title: "SAP 2",
      description: (
        <>
          <div className="space-y-6">
            {/* Hero Section */}
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

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Blur */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                    5
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                      Struktur Dasar SAP
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Card 1 */}
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">
                      Informasi Umum
                    </h3>

                    <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                      Setiap data yang diinput akan saling terhubung antar bagian dalam
                      perusahaan. Sebagai contoh, data yang diinput oleh administrasi dapat
                      digunakan oleh bagian lain seperti Finance, Warehouse, maupun
                      manajemen.
                    </p>

                    <p className="text-sm md:text-base leading-8 text-slate-700 text-justify mt-3">
                      Administrasi tidak perlu memahami SAP secara mendalam. Cukup memahami
                      dasar penggunaan seperti TCODE dan alur kerja operasional yang
                      digunakan sehari-hari.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">
                      Module SAP
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="rounded-2xl bg-green-50 border border-green-100 p-4">
                        <h4 className="font-bold text-green-700 mb-2">MM</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Material Management untuk pengelolaan barang dan material.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4">
                        <h4 className="font-bold text-blue-700 mb-2">FI</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Financial Accounting untuk pengelolaan data keuangan.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
                        <h4 className="font-bold text-orange-700 mb-2">SD</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Sales and Distribution untuk proses penjualan dan distribusi.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl bg-slate-900 p-4">
                      <p className="text-sm md:text-base leading-7 text-slate-200">
                        Dalam panduan ini, pembahasan akan difokuskan pada module yang
                        digunakan dalam{" "}
                        <span className="font-semibold text-green-400">
                          PAS (Plantation Application System)
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center text-xl">
                          💻
                        </div>

                        <h3 className="text-lg font-semibold text-slate-800">
                          SAP GUI
                        </h3>
                      </div>

                      <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                        SAP diakses melalui aplikasi yang disebut{" "}
                        <span className="font-semibold text-green-700">
                          SAP GUI (Graphical User Interface)
                        </span>
                        , yaitu tampilan utama untuk menjalankan aktivitas di dalam sistem
                        SAP.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center text-xl">
                          ⚡
                        </div>

                        <h3 className="text-lg font-semibold text-slate-800">
                          Transaction Code (TCODE)
                        </h3>
                      </div>

                      <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                        TCODE merupakan kode singkat (shortcut) yang digunakan untuk
                        mengakses menu atau fitur tertentu di SAP dengan lebih cepat dan
                        efisien.
                      </p>
                    </div>
                  </div>

                  {/* Flow */}
                  <div className="rounded-3xl border border-green-100 bg-gradient-to-r from-green-600 to-emerald-500 p-6 md:p-8 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                        🔄
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold">
                        Alur Dasar Penggunaan SAP
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                      {[
                        "Login SAP",
                        "Input TCODE",
                        "Input / Lihat Data",
                        "Save Data",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-center"
                        >
                          <div className="w-10 h-10 rounded-full bg-white text-green-700 flex items-center justify-center font-bold mx-auto mb-3">
                            {index + 1}
                          </div>

                          <p className="text-sm md:text-base font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
  const doc_lho = [
    // SAP PAS - Gambaran Umum
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
    {
      title: "SAP 2",
      description: (
        <>
          <div className="space-y-6">
            {/* Hero Section */}
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

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Blur */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                    5
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                      Struktur Dasar SAP
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Card 1 */}
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">
                      Informasi Umum
                    </h3>

                    <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                      Setiap data yang diinput akan saling terhubung antar bagian dalam
                      perusahaan. Sebagai contoh, data yang diinput oleh administrasi dapat
                      digunakan oleh bagian lain seperti Finance, Warehouse, maupun
                      manajemen.
                    </p>

                    <p className="text-sm md:text-base leading-8 text-slate-700 text-justify mt-3">
                      Administrasi tidak perlu memahami SAP secara mendalam. Cukup memahami
                      dasar penggunaan seperti TCODE dan alur kerja operasional yang
                      digunakan sehari-hari.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">
                      Module SAP
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="rounded-2xl bg-green-50 border border-green-100 p-4">
                        <h4 className="font-bold text-green-700 mb-2">MM</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Material Management untuk pengelolaan barang dan material.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4">
                        <h4 className="font-bold text-blue-700 mb-2">FI</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Financial Accounting untuk pengelolaan data keuangan.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
                        <h4 className="font-bold text-orange-700 mb-2">SD</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Sales and Distribution untuk proses penjualan dan distribusi.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl bg-slate-900 p-4">
                      <p className="text-sm md:text-base leading-7 text-slate-200">
                        Dalam panduan ini, pembahasan akan difokuskan pada module yang
                        digunakan dalam{" "}
                        <span className="font-semibold text-green-400">
                          PAS (Plantation Application System)
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center text-xl">
                          💻
                        </div>

                        <h3 className="text-lg font-semibold text-slate-800">
                          SAP GUI
                        </h3>
                      </div>

                      <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                        SAP diakses melalui aplikasi yang disebut{" "}
                        <span className="font-semibold text-green-700">
                          SAP GUI (Graphical User Interface)
                        </span>
                        , yaitu tampilan utama untuk menjalankan aktivitas di dalam sistem
                        SAP.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center text-xl">
                          ⚡
                        </div>

                        <h3 className="text-lg font-semibold text-slate-800">
                          Transaction Code (TCODE)
                        </h3>
                      </div>

                      <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                        TCODE merupakan kode singkat (shortcut) yang digunakan untuk
                        mengakses menu atau fitur tertentu di SAP dengan lebih cepat dan
                        efisien.
                      </p>
                    </div>
                  </div>

                  {/* Flow */}
                  <div className="rounded-3xl border border-green-100 bg-gradient-to-r from-green-600 to-emerald-500 p-6 md:p-8 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                        🔄
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold">
                        Alur Dasar Penggunaan SAP
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                      {[
                        "Login SAP",
                        "Input TCODE",
                        "Input / Lihat Data",
                        "Save Data",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-center"
                        >
                          <div className="w-10 h-10 rounded-full bg-white text-green-700 flex items-center justify-center font-bold mx-auto mb-3">
                            {index + 1}
                          </div>

                          <p className="text-sm md:text-base font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
  const doc_lhr = [
    // SAP PAS - Gambaran Umum
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
    {
      title: "SAP 2",
      description: (
        <>
          <div className="space-y-6">
            {/* Hero Section */}
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

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Blur */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                    5
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                      Struktur Dasar SAP
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Card 1 */}
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">
                      Informasi Umum
                    </h3>

                    <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                      Setiap data yang diinput akan saling terhubung antar bagian dalam
                      perusahaan. Sebagai contoh, data yang diinput oleh administrasi dapat
                      digunakan oleh bagian lain seperti Finance, Warehouse, maupun
                      manajemen.
                    </p>

                    <p className="text-sm md:text-base leading-8 text-slate-700 text-justify mt-3">
                      Administrasi tidak perlu memahami SAP secara mendalam. Cukup memahami
                      dasar penggunaan seperti TCODE dan alur kerja operasional yang
                      digunakan sehari-hari.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">
                      Module SAP
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="rounded-2xl bg-green-50 border border-green-100 p-4">
                        <h4 className="font-bold text-green-700 mb-2">MM</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Material Management untuk pengelolaan barang dan material.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4">
                        <h4 className="font-bold text-blue-700 mb-2">FI</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Financial Accounting untuk pengelolaan data keuangan.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
                        <h4 className="font-bold text-orange-700 mb-2">SD</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Sales and Distribution untuk proses penjualan dan distribusi.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl bg-slate-900 p-4">
                      <p className="text-sm md:text-base leading-7 text-slate-200">
                        Dalam panduan ini, pembahasan akan difokuskan pada module yang
                        digunakan dalam{" "}
                        <span className="font-semibold text-green-400">
                          PAS (Plantation Application System)
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center text-xl">
                          💻
                        </div>

                        <h3 className="text-lg font-semibold text-slate-800">
                          SAP GUI
                        </h3>
                      </div>

                      <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                        SAP diakses melalui aplikasi yang disebut{" "}
                        <span className="font-semibold text-green-700">
                          SAP GUI (Graphical User Interface)
                        </span>
                        , yaitu tampilan utama untuk menjalankan aktivitas di dalam sistem
                        SAP.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center text-xl">
                          ⚡
                        </div>

                        <h3 className="text-lg font-semibold text-slate-800">
                          Transaction Code (TCODE)
                        </h3>
                      </div>

                      <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                        TCODE merupakan kode singkat (shortcut) yang digunakan untuk
                        mengakses menu atau fitur tertentu di SAP dengan lebih cepat dan
                        efisien.
                      </p>
                    </div>
                  </div>

                  {/* Flow */}
                  <div className="rounded-3xl border border-green-100 bg-gradient-to-r from-green-600 to-emerald-500 p-6 md:p-8 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                        🔄
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold">
                        Alur Dasar Penggunaan SAP
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                      {[
                        "Login SAP",
                        "Input TCODE",
                        "Input / Lihat Data",
                        "Save Data",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-center"
                        >
                          <div className="w-10 h-10 rounded-full bg-white text-green-700 flex items-center justify-center font-bold mx-auto mb-3">
                            {index + 1}
                          </div>

                          <p className="text-sm md:text-base font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
  const doc_lkb = [
    // SAP PAS - Gambaran Umum
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
    {
      title: "SAP 2",
      description: (
        <>
          <div className="space-y-6">
            {/* Hero Section */}
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

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
              {/* Background Blur */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-lg">
                    5
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                      Struktur Dasar SAP
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Card 1 */}
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">
                      Informasi Umum
                    </h3>

                    <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                      Setiap data yang diinput akan saling terhubung antar bagian dalam
                      perusahaan. Sebagai contoh, data yang diinput oleh administrasi dapat
                      digunakan oleh bagian lain seperti Finance, Warehouse, maupun
                      manajemen.
                    </p>

                    <p className="text-sm md:text-base leading-8 text-slate-700 text-justify mt-3">
                      Administrasi tidak perlu memahami SAP secara mendalam. Cukup memahami
                      dasar penggunaan seperti TCODE dan alur kerja operasional yang
                      digunakan sehari-hari.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">
                      Module SAP
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="rounded-2xl bg-green-50 border border-green-100 p-4">
                        <h4 className="font-bold text-green-700 mb-2">MM</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Material Management untuk pengelolaan barang dan material.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4">
                        <h4 className="font-bold text-blue-700 mb-2">FI</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Financial Accounting untuk pengelolaan data keuangan.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
                        <h4 className="font-bold text-orange-700 mb-2">SD</h4>

                        <p className="text-sm text-slate-600 leading-6">
                          Sales and Distribution untuk proses penjualan dan distribusi.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl bg-slate-900 p-4">
                      <p className="text-sm md:text-base leading-7 text-slate-200">
                        Dalam panduan ini, pembahasan akan difokuskan pada module yang
                        digunakan dalam{" "}
                        <span className="font-semibold text-green-400">
                          PAS (Plantation Application System)
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center text-xl">
                          💻
                        </div>

                        <h3 className="text-lg font-semibold text-slate-800">
                          SAP GUI
                        </h3>
                      </div>

                      <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                        SAP diakses melalui aplikasi yang disebut{" "}
                        <span className="font-semibold text-green-700">
                          SAP GUI (Graphical User Interface)
                        </span>
                        , yaitu tampilan utama untuk menjalankan aktivitas di dalam sistem
                        SAP.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center text-xl">
                          ⚡
                        </div>

                        <h3 className="text-lg font-semibold text-slate-800">
                          Transaction Code (TCODE)
                        </h3>
                      </div>

                      <p className="text-sm md:text-base leading-7 text-slate-700 text-justify">
                        TCODE merupakan kode singkat (shortcut) yang digunakan untuk
                        mengakses menu atau fitur tertentu di SAP dengan lebih cepat dan
                        efisien.
                      </p>
                    </div>
                  </div>

                  {/* Flow */}
                  <div className="rounded-3xl border border-green-100 bg-gradient-to-r from-green-600 to-emerald-500 p-6 md:p-8 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                        🔄
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold">
                        Alur Dasar Penggunaan SAP
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                      {[
                        "Login SAP",
                        "Input TCODE",
                        "Input / Lihat Data",
                        "Save Data",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-center"
                        >
                          <div className="w-10 h-10 rounded-full bg-white text-green-700 flex items-center justify-center font-bold mx-auto mb-3">
                            {index + 1}
                          </div>

                          <p className="text-sm md:text-base font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
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

  const tabsCard = [
    {
      title: "SPK Mobile",
      value: "SPK Mobile",
      content: (
        <BentoGrid className="flex max-w-full h-screen border-primary hover:border-secondary rounded-xl border-2">
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
          <section className="bg-gradient-to-b from-white via-white to-white animate-gradient mt-20">
            {/* konten */}
            <div className="h-[1000px] w-full p-10 flex justify-between [perspective:1000px] relative flex-col items-start">
              <h1 className="font-bold text-4xl text-center justify-center m-auto flex pt-10 text-primary hover:text-secondary">
                Documentation
                <FlipWords className="text-secondary" words={words} />
              </h1>
              {/* Search bar */}
              <div className="relative w-full max-w-2xl m-auto mt-5 mb-10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-300/20 to-green-300/20 blur-md -z-10" />
                <div className="relative flex items-center bg-white border border-gray-200 rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-emerald-400 focus-within:border-emerald-400 transition-all duration-200">
                  <Search className="absolute left-4 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari TCODE SAP PAS"
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
                  Documentation
                </h1>

                <div className="mt-4 flex justify-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-600">
                    <FlipWords className="text-emerald-600" words={words} />
                  </div>
                </div>

                <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Untuk Administrasi
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full max-w-3xl mx-auto mt-10">
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-300/20 to-green-300/20 blur-2xl" />

                <div className="relative flex items-center rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-md shadow-xl transition-all duration-300 focus-within:border-emerald-400 focus-within:ring-4 focus-within:ring-emerald-100">

                  <Search className="absolute left-5 h-5 w-5 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Cari TCODE SAP PAS"
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

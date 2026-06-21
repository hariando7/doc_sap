import Image from "next/image";

export default function Doc_sap() {
    return (
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
    );
}
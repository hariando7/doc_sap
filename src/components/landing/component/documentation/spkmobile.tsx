import Image from "next/image";

export default function Doc_SPKMobile() {
    return (
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
                                                Open Video
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Embedded Video */}
                            <div className="mt-8 max-w-6xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                                <iframe
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/fpe8KAqChy0"
                                    title="Tutorial ZPAS220"
                                    loading="lazy"
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
                                                Open Video
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Embedded Video */}
                            <div className="mt-8 max-w-6xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                                <iframe
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/fpe8KAqChy0"
                                    title="Tutorial ZPAS220"
                                    loading="lazy"
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
                                                Open Video
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Embedded Video */}
                            <div className="mt-8 max-w-6xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                                <iframe
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/fpe8KAqChy0"
                                    title="Tutorial ZPAS220"
                                    loading="lazy"
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
                                            Semua fungsi pada ZPAS601D_M sudah tersedia pada Video
                                        </p>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="flex-shrink-0">
                                    <a
                                        href="https://youtu.be/fpe8KAqChy0"
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
                                                Open
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Embedded Video */}
                            <div className="mt-8 max-w-6xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                                <iframe
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/fpe8KAqChy0"
                                    title="Tutorial ZPAS220"
                                    loading="lazy"
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
                                                Open Video
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Embedded Video */}
                            <div className="mt-8 max-w-6xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                                <iframe
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/fpe8KAqChy0"
                                    title="Tutorial ZPAS220"
                                    loading="lazy"
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
                                                Open Video
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Embedded Video */}
                            <div className="mt-8 max-w-6xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                                <iframe
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/fpe8KAqChy0"
                                    title="Tutorial ZPAS220"
                                    loading="lazy"
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
                                                Open Video
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Embedded Video */}
                            <div className="mt-8 max-w-6xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-black">
                                <iframe
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/fpe8KAqChy0"
                                    title="Tutorial ZPAS220"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* LHO Irigasi */}
                <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 md:p-10 shadow-sm">
                    {/* Background Effect */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/30 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg">
                                9
                            </div>

                            <div>
                                <p className="text-sm font-medium text-green-700 uppercase tracking-wider">
                                    PAS Documentation
                                </p>

                                <h3 id="Irigasi" className="text-lg md:text-3xl font-bold text-slate-800">
                                    LHO Irigasi — LHO irigasi tutorial Mandor
                                </h3>
                            </div>
                        </div>

                        {/* Video Tutorial */}
                        <div className="mt-6 rounded-3xl border border-red-100 bg-gradient-to-r from-red-50 via-white to-red-50 p-4 sm:p-6">
                            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                                {/* Content */}
                                <div className="flex items-start gap-3 sm:gap-4 flex-1">
                                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-red-500 text-xl sm:text-2xl text-white shadow-lg">
                                        ▶️
                                    </div>

                                    <div className="min-w-0">
                                        <p className="mb-1 text-xs sm:text-sm font-medium uppercase tracking-wider text-red-500">
                                            Video Tutorial
                                        </p>

                                        <h5 className="mb-2 text-base sm:text-lg md:text-xl font-bold text-slate-800">
                                            Penggunaan LHO Irigasi untuk Mandor
                                        </h5>

                                        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                                            Video berikut menjelaskan proses penggunaan LHO Irigasi untuk mandor secara lengkap mulai dari pengisian hingga pelaporan data.
                                        </p>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="w-full lg:w-auto">
                                    <a
                                        href="https://youtu.be/KS-SfzxGROg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-full lg:w-auto items-center justify-center gap-3 rounded-xl bg-red-500 px-5 py-3 text-white shadow-md transition-all duration-300 hover:bg-red-600 hover:shadow-lg"
                                    >
                                        <span className="text-xl">🎥</span>

                                        <div className="text-left leading-tight">
                                            <p className="text-[10px] opacity-80">
                                                Lihat Tutorial
                                            </p>

                                            <p className="text-sm font-semibold">
                                                Open Video
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Video */}
                            <div className="mt-6 sm:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-black shadow-lg">
                                <iframe
                                    className="aspect-video w-full"
                                    src="https://www.youtube.com/embed/KS-SfzxGROg"
                                    title="Tutorial LHO Irigasi"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
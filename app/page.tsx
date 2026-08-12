"use client";

import Link from "next/link";
import {
  Camera,
  PlayCircle,
  Wifi,
  Download,
  CalendarCheck,
  MapPin,
  Trophy,
  Smartphone,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  FaYoutube,
  FaFacebook,
  FaLink,
  FaTv,
} from "react-icons/fa";


const WHATSAPP = "https://wa.me/5491140846563?text=Hola%20MatchVision,%20quiero%20consultar%20por%20la%20grabaci%C3%B3n%20de%20un%20partido";

const plans = [
  {
    name: "Partido único",
    price: "$100.000",
    detail: "1 partido",
    desc: "Ideal para una fecha especial, final, amistoso o partido importante.",
    featured: false,
  },
  {
    name: "Plan Club",
    price: "$450.000",
    detail: "5 partidos",
    desc: "Para equipos que quieren grabar varias fechas y empezar a analizar su juego.",
    featured: true,
  },
  {
    name: "Temporada",
    price: "$850.000",
    detail: "10 partidos",
    desc: "La mejor opción para clubes, torneos y equipos con calendario regular.",
    featured: false,
  },
];

const sports = ["Basketball", "Voley", "Hockey", "Baseball" ,"Rugby"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf5] text-[#111111]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[#fbfaf5]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="#" className="text-xl font-black tracking-tight">
            Match<span className="text-[#55b96f]">Vision</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-black/70 md:flex">
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#planes">Planes</a>
            <a href="#streaming">Streaming</a>
            <a href="#cobertura">Cobertura</a>
          </nav>

          <a
            href={WHATSAPP}
            className="rounded-full bg-[#111] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2d2d2d]"
          >
            Reservar
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-20 pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Nunca vuelvas a perderte un partido.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/65">
              Grabamos y hacemos streamings de tus partidos con cámaras de alta tecnología, con seguimiento automático de la pelota optimizado por IA. 
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP}
                className="inline-flex items-center justify-center rounded-full bg-[#111] px-7 py-4 font-bold text-white transition hover:bg-[#2d2d2d]"
              >
                Reserva ya!
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-7 py-4 font-bold transition hover:border-black/30"
              >
                <PlayCircle size={20} />
                Ver demo
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">

    <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
    >
        <source src="/video.mp4" type="video/mp4" />
    </video>

    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

    <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/90 p-6 backdrop-blur-xl">

        <p className="text-xs font-bold uppercase tracking-widest text-[#55b96f]">
            Grabación profesional
        </p>

        <h3 className="mt-2 text-2xl font-black">
            Partido completo + Streaming
        </h3>

        <p className="mt-2 text-sm text-black/60">
            Grabación inteligente para clubes, entrenadores y jugadores.
        </p>

    </div>

</div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Simple"
            title="Cómo funciona"
            text="Nos ocupamos de la parte técnica para que vos sólo te enfoques en el partido."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            <Step icon={<CalendarCheck />} title="Reservás" text="Coordinamos fecha, horario, deporte y cancha." />
            <Step icon={<Camera />} title="Instalamos" text="Llegamos antes y dejamos la cámara lista." />
            <Step icon={<Trophy />} title="Grabamos" text="La cámara sigue automáticamente la acción." />
            <Step icon={<Download />} title="Recibís" text="Te enviamos el link privado para ver y descargar." />
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Deportes"
            title="No es sólo fútbol"
            text="El fútbol es nuestro fuerte, pero también cubrimos otros deportes."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sports.map((sport) => (
              <div key={sport} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5">
                <p className="text-xl font-black">{sport}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#7ce291]">Incluye</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Todo listo para ver, compartir y analizar.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Partido completo",
              "Seguimiento automático",
              "Link privado",
              "Descarga digital",
              "Compatible con celular",
              "Compatible con Smart TV",
              "Hasta 2 horas por partido",
              "Almacenamiento temporal",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/7 p-4">
                <CheckCircle2 className="text-[#7ce291]" size={20} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planes" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Planes"
            title="Elegí cómo querés grabar"
            text="Todos los planes incluyen hasta 2 horas de cobertura por partido."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[2rem] p-8 ring-1 ${
                  plan.featured
                    ? "bg-[#e9f8ed] ring-[#55b96f] shadow-xl shadow-[#55b96f]/15"
                    : "bg-[#fbfaf5] ring-black/8"
                }`}
              >
                {plan.featured && (
                  <div className="mb-5 inline-flex rounded-full bg-[#55b96f] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white">
                    Más elegido
                  </div>
                )}

                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className="mt-4 text-5xl font-black tracking-tight">{plan.price}</p>
                <p className="mt-2 font-bold text-black/60">{plan.detail}</p>
                <p className="mt-5 min-h-20 leading-7 text-black/60">{plan.desc}</p>

                <ul className="mt-8 space-y-3 text-sm font-medium text-black/70">
                  <li>✔ Grabación completa</li>
                  <li>✔ Link privado</li>
                  <li>✔ Descarga digital</li>
                  <li>✔ Hasta 2 horas por partido</li>
                </ul>

                <a
                  href={WHATSAPP}
                  className="mt-8 inline-flex w-full justify-center rounded-full bg-[#111] px-6 py-4 font-bold text-white transition hover:bg-[#2d2d2d]"
                >
                  Consultar
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-black/55">
            Para torneos, dobles jornadas o varios partidos consecutivos, consultanos por precio especial por bloque horario.
          </p>
        </div>
      </section>

<section id="streaming" className="bg-[#f8faf8] px-6 py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

    {/* Columna izquierda */}

    <div className="rounded-[2.5rem] bg-gradient-to-br from-[#e9f8ed] to-white p-10 shadow-xl">

      <div className="mb-8 inline-flex rounded-2xl bg-[#55b96f] p-4 text-white">
        <Wifi size={36} />
      </div>

      <span className="rounded-full bg-[#55b96f]/15 px-4 py-2 text-sm font-bold text-[#287a3e]">
        Servicio adicional
      </span>

      <h2 className="mt-6 text-5xl font-black tracking-tight">
        Streaming Premium
      </h2>

      <p className="mt-6 text-lg leading-8 text-black/65">
        Compartí el partido en vivo para que familiares, amigos, jugadores y cuerpo técnico puedan seguirlo desde cualquier lugar del mundo.
      </p>

      <div className="mt-8 rounded-3xl bg-[#111] p-6 text-white">

        <p className="text-sm uppercase tracking-widest text-[#7ce291]">
          Adicional por partido
        </p>

        <p className="mt-2 text-5xl font-black">
          $20.000
        </p>

        <p className="mt-2 text-white/70">
          Disponible para cualquiera de nuestros planes de grabación.
        </p>

      </div>

      <p className="mt-6 text-sm leading-6 text-black/50">
        El servicio requiere disponibilidad de conexión a Internet en el predio
        (WiFi o red móvil 4G/5G). En caso de no existir cobertura suficiente,
        el streaming podría no estar disponible.
      </p>

    </div>

    {/* Columna derecha */}

    <div>

      <h3 className="text-3xl font-black">
        Elegí dónde transmitir
      </h3>

      <p className="mt-4 text-lg leading-8 text-black/60">
        Podemos emitir el partido en distintas plataformas según tus necesidades.
      </p>

      <div className="mt-10 grid gap-5">

        <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">

          <div className="rounded-2xl bg-[#e9f8ed] p-4">
            <FaLink className="text-[#55b96f]" size={26} />
          </div>

          <div>
            <h4 className="text-xl font-black">
              Link privado MatchVision
            </h4>

            <p className="mt-2 text-black/60 leading-7">
              Recibí un enlace privado para compartir únicamente con quienes vos decidas. Compatible con celulares, tablets, notebooks y Smart TV.
            </p>
          </div>

        </div>

        <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">

          <div className="rounded-2xl bg-red-50 p-4">
            <FaYoutube className="text-red-600" size={28} />
          </div>

          <div>
            <h4 className="text-xl font-black">
              YouTube Live
            </h4>

            <p className="mt-2 text-black/60 leading-7">
              Transmisión pública, privada o no listada. Ideal para torneos, clubes y ligas que ya utilizan YouTube para difundir sus partidos.
            </p>
          </div>

        </div>

        <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">

          <div className="rounded-2xl bg-blue-50 p-4">
            <FaFacebook className="text-[#1877F2]" size={28} />
          </div>

          <div>
            <h4 className="text-xl font-black">
              Facebook Live
            </h4>

            <p className="mt-2 text-black/60 leading-7">
              Perfecto para clubes y comunidades deportivas que transmiten sus encuentros desde páginas o grupos de Facebook.
            </p>
          </div>

        </div>

        <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">

          <div className="rounded-2xl bg-[#e9f8ed] p-4">
            <FaTv className="text-[#55b96f]" size={26} />
          </div>

          <div>
            <h4 className="text-xl font-black">
              Otras plataformas
            </h4>

            <p className="mt-2 text-black/60 leading-7">
              También podemos transmitir a Twitch, Vimeo Live, servidores RTMP personalizados o integrarlo con plataformas de streaming de terceros, según los requerimientos del club u organización.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

    <section id="demo" className="bg-white px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <div className="text-center">

      <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
        Descubrí cómo funciona MatchVision
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
        Desde la instalación de la cámara hasta la entrega del partido, todo el
        proceso está pensado para que clubes, entrenadores y jugadores obtengan
        una grabación profesional sin necesidad de un camarógrafo.
        <br /><br />
        La cámara utiliza <strong>visión artificial</strong> para seguir
        automáticamente el desarrollo del juego y mantener la acción siempre en
        el centro de la imagen.
      </p>

    </div>

    <div className="mt-14 overflow-hidden rounded-[2rem] shadow-2xl shadow-black/15 ring-1 ring-black/10">

      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        poster="/poster.jpg"
        className="block aspect-video w-full object-cover"
      >
        <source src="/demo.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-4">

      <div className="rounded-3xl bg-[#f8faf8] p-6 ring-1 ring-black/5">
        <p className="text-3xl">📹</p>
        <h3 className="mt-4 font-black">Instalación</h3>
        <p className="mt-2 text-sm leading-6 text-black/60">
          Llegamos al predio, instalamos la cámara y dejamos todo listo antes del inicio.
        </p>
      </div>

      <div className="rounded-3xl bg-[#f8faf8] p-6 ring-1 ring-black/5">
        <p className="text-3xl">🤖</p>
        <h3 className="mt-4 font-black">Seguimiento Inteligente</h3>
        <p className="mt-2 text-sm leading-6 text-black/60">
          La cámara interpreta el juego y ajusta automáticamente el encuadre durante todo el partido.
        </p>
      </div>

      <div className="rounded-3xl bg-[#f8faf8] p-6 ring-1 ring-black/5">
        <p className="text-3xl">📡</p>
        <h3 className="mt-4 font-black">Streaming</h3>
        <p className="mt-2 text-sm leading-6 text-black/60">
          Compartí el encuentro en vivo mediante un enlace privado o plataformas compatibles.
        </p>
      </div>

      <div className="rounded-3xl bg-[#f8faf8] p-6 ring-1 ring-black/5">
        <p className="text-3xl">⬇️</p>
        <h3 className="mt-4 font-black">Entrega Digital</h3>
        <p className="mt-2 text-sm leading-6 text-black/60">
          Recibí el partido completo para verlo, descargarlo o compartirlo cuando quieras.
        </p>
      </div>

    </div>

  </div>
</section>  
         
    

      <section id="cobertura" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Zona"
            title="Cobertura inicial: GBA Oeste"
            text="Arrancamos cerca para asegurar buena logística, puntualidad y calidad de servicio."
          />
			<section id="cobertura" className="bg-[#fbfaf5] px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-black uppercase tracking-widest text-[#55b96f]">
          Cobertura
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
          Arrancamos en GBA Oeste.
        </h2>

        <p className="mt-6 text-lg leading-8 text-black/60">
          Cubrimos partidos en clubes, canchas y predios deportivos de la zona oeste.
          Si tu cancha está cerca, consultanos y coordinamos disponibilidad.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Ituzaingó",
            "Castelar",
            "Morón",
            "Hurlingham",
            "Merlo",
          ].map((city) => (
            <div
              key={city}
              className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5"
            >
              <MapPin className="text-[#55b96f]" size={20} />
              <span className="font-bold">{city}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm leading-6 text-black/50">
          ¿Tu club está fuera de la zona? Escribinos y vemos si podemos cubrirlo.
        </p>
      </div>

      <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5">
        <iframe
          title="Cobertura MatchVision GBA Oeste"
          src="https://www.google.com/maps/d/u/0/embed?mid=1hJsjPwjoM_4lxWDfoY8zSGIRAdlkt-c&ehbc=2E312F&noprof=1"
          width="100%"
          height="520"
          loading="lazy"
          className="block w-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  </div>
</section>
          
        </div>
      </section>

      <section className="bg-[#e9f8ed] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Clock className="mx-auto mb-6 text-[#287a3e]" size={40} />
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            ¿Listo para grabar tu próximo partido?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/65">
            Escribinos por WhatsApp, contanos deporte, cancha, fecha y horario. Te confirmamos disponibilidad y coordinamos todo.
          </p>
          <a
            href={WHATSAPP}
            className="mt-9 inline-flex rounded-full bg-[#111] px-8 py-4 font-black text-white transition hover:bg-[#2d2d2d]"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-[#111] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm md:flex-row">
          <p className="font-black">MatchVision</p>
          <p className="text-white/50">Grabación inteligente de eventos deportivos · GBA Oeste</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureMini({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
      <span className="text-[#55b96f]">{icon}</span>
      <span className="font-semibold">{text}</span>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-widest text-[#55b96f]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-black/60">{text}</p>
    </div>
  );
}

function Step({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-[2rem] bg-[#fbfaf5] p-7 ring-1 ring-black/5">
      <div className="mb-6 inline-flex rounded-2xl bg-[#e9f8ed] p-3 text-[#287a3e]">{icon}</div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-black/60">{text}</p>
    </div>
  );
}

function PremiumItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white p-7 ring-1 ring-black/5">
      <div className="mb-5 text-[#55b96f]">{icon}</div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-black/60">{text}</p>
    </div>
  );
}
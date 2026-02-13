import { Metadata } from 'next'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Exhibitions & Events | Saheeb Trading Co.',
  description:
    'Explore our presence at international exhibitions including EuroTier and Ferma Poland. See our journey of innovation in surgical and veterinary instruments.',
}

/* ── Image Placeholder (only for events without images) ── */
function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className='w-full aspect-video bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center rounded-lg'>
      <ImageIcon className='h-12 w-12 text-gray-300 mb-2' />
      <span className='text-xs text-gray-400 font-bold uppercase tracking-wider'>
        {label}
      </span>
    </div>
  )
}

/* ── Exhibition Image ─────────────────────────────────── */
function ExhibitionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className='relative w-full aspect-video rounded-lg overflow-hidden'>
      <Image
        src={src}
        alt={alt}
        fill
        className='object-cover'
        sizes='(max-width: 768px) 100vw, 50vw'
      />
    </div>
  )
}

/* ── Table Component ───────────────────────────────────── */
function DataTable({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <table className='w-full text-sm border border-gray-200 rounded overflow-hidden'>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className='px-4 py-3 font-bold text-gray-700 border-r border-gray-200 w-1/3'>
              {row.label}
            </td>
            <td className='px-4 py-3 text-gray-600'>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/* ── Individual Event Sections ─────────────────────────── */

function EuroTier2016() {
  return (
    <section id='eurotier-2016' className='scroll-mt-24'>
      <div className='border-l-4 border-primary pl-6 mb-8'>
        <span className='text-sm font-bold text-primary uppercase tracking-widest'>
          EuroTier 2016 · Hanover, Germany
        </span>
        <h2 className='text-2xl md:text-3xl font-black text-gray-900 mt-2'>
          Precision in Practice: Reflecting on Our Journey at EuroTier 2016
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        <ExhibitionImage
          src='/Exhibitions/2016 Eurotier/2016 Eurotier-01.jpeg'
          alt='EuroTier 2016 booth'
        />
        <ExhibitionImage
          src='/Exhibitions/2016 Eurotier/2016 Eurotier-02.jpeg'
          alt='EuroTier 2016 display'
        />
      </div>

      <p className='text-gray-600 leading-relaxed mb-6'>
        As we look back at our gallery from EuroTier 2016, we are reminded why
        this exhibition remains the global gold standard for the animal
        husbandry and veterinary sectors. With over 2,600 exhibitors and a
        record-breaking 163,000 visitors descending on Hanover, the energy was
        focused on one thing: the future of high-precision animal health.
      </p>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        A Milestone for Veterinary Innovation
      </h3>
      <p className='text-gray-600 leading-relaxed mb-6'>
        2016 was a pivotal year for surgical manufacturing. While the livestock
        industry was buzzing about &ldquo;EnergyDecentral&rdquo; and automated
        feeding, our focus was firmly on the veterinary medicine and animal
        health halls. The industry was shifting toward minimally invasive
        surgery (MIS) and digital diagnostics. For a manufacturer, this meant
        producing instruments that weren&apos;t just durable, but capable of the
        extreme precision required for new endoscopic and laparoscopic
        techniques in both large and small animals.
      </p>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        Highlights from the Booth
      </h3>
      <p className='text-gray-600 leading-relaxed mb-4'>
        Our presence at the 2016 show allowed us to engage directly with
        international distributors and veterinary specialists. Key trends we
        addressed:
      </p>
      <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-6'>
        <li>
          <strong>The Demand for Specialized Alloys:</strong> As animal welfare
          standards rose, so did the need for instruments that could withstand
          more rigorous sterilization protocols without losing their edge or
          structural integrity.
        </li>
        <li>
          <strong>Ergonomics for the Field:</strong> In veterinary
          care—especially for large animals—instruments need to be as
          &ldquo;field-ready&rdquo; as they are &ldquo;theatre-ready.&rdquo; We
          showcased tools designed for the unique physical demands of farm-side
          surgery.
        </li>
        <li>
          <strong>Global Networking:</strong> With nearly 25% of visitors coming
          from outside Germany, EuroTier 2016 was where we solidified our
          footprint in the European and Asian markets.
        </li>
      </ul>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
        <ExhibitionImage
          src='/Exhibitions/2016 Eurotier/2016 Eurotier-03.jpeg'
          alt='EuroTier 2016 showcase'
        />
        <ExhibitionImage
          src='/Exhibitions/2016 Eurotier/2016 Eurotier-04.jpeg'
          alt='EuroTier 2016 instruments'
        />
      </div>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        Why We Still Talk About 2016
      </h3>
      <p className='text-gray-600 leading-relaxed'>
        The innovations we saw—ranging from 3D-assisted diagnostics to new
        robotic applications in vaccination—set the stage for the med-tech we
        manufacture today. EuroTier 2016 wasn&apos;t just an exhibition; it was
        the proving ground for the high-quality surgical standards we continue
        to uphold.
      </p>
    </section>
  )
}

function EuroTier2018() {
  return (
    <section id='eurotier-2018' className='scroll-mt-24'>
      <div className='border-l-4 border-primary pl-6 mb-8'>
        <span className='text-sm font-bold text-primary uppercase tracking-widest'>
          EuroTier 2018 · Hanover, Germany
        </span>
        <h2 className='text-2xl md:text-3xl font-black text-gray-900 mt-2'>
          Digital Transformation in Veterinary Care: EuroTier 2018 in Review
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        <ExhibitionImage
          src='/Exhibitions/2018 Eurotier/2018 Eurotier-01.jpeg'
          alt='EuroTier 2018 booth'
        />
        <ExhibitionImage
          src='/Exhibitions/2018 Eurotier/2018 Eurotier-02.jpeg'
          alt='EuroTier 2018 display'
        />
      </div>

      <p className='text-gray-600 leading-relaxed mb-6'>
        Returning to Hanover for EuroTier 2018, the atmosphere had shifted from
        pure mechanical strength to the dawn of the Digital Animal Farming era.
        As a manufacturer of surgical and diagnostic tools, we witnessed
        firsthand how &ldquo;Big Data&rdquo; began to refine the precision of
        veterinary medicine.
      </p>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        The Rise of Precision Animal Health
      </h3>
      <p className='text-gray-600 leading-relaxed mb-4'>
        The 2018 exhibition was a landmark for integration. It wasn&apos;t just
        about having the right tool; it was about how that tool connected to a
        larger ecosystem of animal health monitoring.
      </p>
      <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-6'>
        <li>
          <strong>Digitization as a Standard:</strong> The central theme was the
          digital transformation of the livestock sector, emphasizing how
          sensor-based data could lead to earlier surgical interventions and
          more accurate diagnoses.
        </li>
        <li>
          <strong>The Animal Welfare Award:</strong> 2018 marked the first year
          the Animal Welfare Award was presented by the DLG alongside the
          Federal Association of Practising Veterinarians (bpt). This
          underscored a global shift toward manufacturing instruments that
          prioritize stress reduction and recovery speed.
        </li>
        <li>
          <strong>Innovations in Automation:</strong> We saw the introduction of
          groundbreaking tech like the Vaccybot, a fully automated poultry
          vaccination robot that used 3D stereoscopic cameras to achieve
          sub-millimetre precision—a level of accuracy that was previously the
          domain of human surgical suites.
        </li>
      </ul>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        Manufacturing for a &ldquo;Smart&rdquo; Industry
      </h3>
      <p className='text-gray-600 leading-relaxed mb-4'>
        For our manufacturing team, 2018 was about meeting the demands of
        Precision Care:
      </p>
      <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-6'>
        <li>
          <strong>Diagnostic Integration:</strong> With tools now recording live
          data—such as the transponder-based systems used to monitor skeletal
          health via X-ray technology—our manufacturing focus expanded to ensure
          our hardware was compatible with these high-tech diagnostic
          environments.
        </li>
        <li>
          <strong>Sustainability &amp; Safety:</strong> The industry&apos;s push
          to reduce antibiotic use meant that surgical sterility and
          &ldquo;first-time-right&rdquo; procedures were more critical than
          ever. We showcased our latest high-grade stainless steel ranges,
          specifically engineered to withstand more intensive, frequent
          sterilization cycles.
        </li>
      </ul>

      {/* Gallery — 9 images from EuroTier 2018 */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-8'>
        <ExhibitionImage
          src='/Exhibitions/2018 Eurotier/2018 Eurotier-03.jpeg'
          alt='EuroTier 2018 booth showcase'
        />
        <ExhibitionImage
          src='/Exhibitions/2018 Eurotier/2018 Eurotier-04.jpeg'
          alt='EuroTier 2018 instruments'
        />
        <ExhibitionImage
          src='/Exhibitions/2018 Eurotier/2018 Eurotier-05.jpeg'
          alt='EuroTier 2018 exhibition hall'
        />
        <ExhibitionImage
          src='/Exhibitions/2018 Eurotier/2018 Eurotier-06.jpeg'
          alt='EuroTier 2018 team'
        />
        <ExhibitionImage
          src='/Exhibitions/2018 Eurotier/2018 Eurotier-07.jpeg'
          alt='EuroTier 2018 products'
        />
        <ExhibitionImage
          src='/Exhibitions/2018 Eurotier/2018 Eurotier-08.jpeg'
          alt='EuroTier 2018 visitors'
        />
        <ExhibitionImage
          src='/Exhibitions/2018 Eurotier/2018 Eurotier-09.jpeg'
          alt='EuroTier 2018 closing'
        />
      </div>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        Looking Back to Move Forward
      </h3>
      <p className='text-gray-600 leading-relaxed'>
        The lessons from 2018—where artificial intelligence began entering the
        milking parlor and the operating bay—continue to influence our
        production lines today. We left Hanover that year with a clear mission:
        to manufacture the &ldquo;smart&rdquo; hardware that powers the digital
        veterinary revolution.
      </p>
    </section>
  )
}

function EuroTier2022() {
  return (
    <section id='eurotier-2022' className='scroll-mt-24'>
      <div className='border-l-4 border-primary pl-6 mb-8'>
        <span className='text-sm font-bold text-primary uppercase tracking-widest'>
          EuroTier 2022 · Hanover, Germany
        </span>
        <h2 className='text-2xl md:text-3xl font-black text-gray-900 mt-2'>
          Transforming the Future: Our Experience at EuroTier 2022
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        <ExhibitionImage
          src='/Exhibitions/2022 Eurotier/2022 Eurotier-01.jpeg'
          alt='EuroTier 2022 booth'
        />
        <ExhibitionImage
          src='/Exhibitions/2022 Eurotier/2022 Eurotier-02.jpeg'
          alt='EuroTier 2022 display'
        />
      </div>

      <p className='text-gray-600 leading-relaxed mb-6'>
        The 2022 edition of EuroTier was a milestone, reuniting over 1,800
        exhibitors from 55 countries and welcoming approximately 106,000
        visitors eager to witness the next generation of livestock management.
        For our team, it was a vital opportunity to showcase how our
        manufacturing standards have evolved to meet a world that is rapidly
        prioritizing sustainability, animal welfare, and digital precision.
      </p>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        A New Era of &ldquo;Intelligence in Animal Farming&rdquo;
      </h3>
      <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-6'>
        <li>
          <strong>Early Intervention &amp; AI:</strong> A major highlight was
          the SoundTalks® system by Boehringer Ingelheim, which won an
          Innovation Gold Award. By using AI to &ldquo;listen&rdquo; for early
          signs of respiratory distress, the system allows for medical
          intervention long before a human can detect symptoms—significantly
          reducing the need for antibiotics.
        </li>
        <li>
          <strong>Precision and Welfare:</strong> The introduction of the Animal
          Welfare Award in 2022 emphasized that the future of surgery and
          treatment is minimally invasive and stress-free.
        </li>
        <li>
          <strong>Alternative Protein Focus:</strong> For the first time,
          EuroTier placed a heavy spotlight on alternative protein sources,
          including insects and algae, reflecting a massive shift in how we
          think about the global food chain.
        </li>
      </ul>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        Manufacturing for the Modern Vet
      </h3>
      <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-6'>
        <li>
          <strong>Compatibility with Robotics:</strong> As barn robots and
          automated systems become more common, the tools veterinarians use must
          be designed for seamless integration with robotic diagnostics.
        </li>
        <li>
          <strong>Sustainability in Materials:</strong> With 2022&apos;s heavy
          focus on &ldquo;Transforming Animal Farming,&rdquo; there was a clear
          demand for surgical grade instruments that are not only long-lasting
          but produced through more sustainable, eco-friendly manufacturing
          processes.
        </li>
        <li>
          <strong>The Global Dialogue:</strong> Despite the years away, the
          international spirit of EuroTier was stronger than ever. We engaged
          with specialists from over 141 countries, proving that the demand for
          precision-made surgical instruments is a truly global requirement.
        </li>
      </ul>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
        <ExhibitionImage
          src='/Exhibitions/2022 Eurotier/2022 Eurotier-03.jpeg'
          alt='EuroTier 2022 showcase'
        />
      </div>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>The Takeaway</h3>
      <p className='text-gray-600 leading-relaxed'>
        EuroTier 2022 wasn&apos;t just a trade fair; it was a roadmap for the
        future. It showed us that while technology and data are leading the way,
        the quality and precision of the physical tools used by veterinarians
        remain the foundation of animal health.
      </p>
    </section>
  )
}

function Ferma2019() {
  return (
    <section id='ferma-2019' className='scroll-mt-24'>
      <div className='border-l-4 border-primary pl-6 mb-8'>
        <span className='text-sm font-bold text-primary uppercase tracking-widest'>
          Ferma Poland 2019 · Łódź, Poland
        </span>
        <h2 className='text-2xl md:text-3xl font-black text-gray-900 mt-2'>
          Targeted Excellence: Our Showcase at Ferma Poland 2019
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        <ExhibitionImage
          src='/Exhibitions/Poland Ferma 2019/Poland Ferma 2019-01.jpeg'
          alt='Ferma Poland 2019 booth'
        />
        <ExhibitionImage
          src='/Exhibitions/Poland Ferma 2019/Poland Ferma 2019-02.jpeg'
          alt='Ferma Poland 2019 display'
        />
      </div>

      <p className='text-gray-600 leading-relaxed mb-6'>
        While EuroTier provides a global overview, Ferma Poland (the
        International Trade Fair for Cattle, Pigs, and Poultry) allows us to
        connect deeply with the specific needs of the regional agricultural
        heartland. Our 2019 attendance in Łódź was a testament to our commitment
        to providing high-quality, specialized surgical and livestock
        instruments to the Polish market.
      </p>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        A Dedicated Hub for Livestock Professionals
      </h3>
      <p className='text-gray-600 leading-relaxed mb-6'>
        Ferma 2019 brought together over 30,000 visitors and 250 exhibitors,
        creating a high-density environment for professional exchange. For a
        manufacturer like Saheeb Trading Co., this was the perfect venue to
        demonstrate our &ldquo;field-ready&rdquo; precision.
      </p>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        Highlights from the Saheeb Booth
      </h3>
      <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-6'>
        <li>
          <strong>Obstetrics &amp; Reproduction:</strong> We showcased our range
          of calving aids and gynecological instruments, which are essential for
          the high-performing dairy sectors prevalent in Poland.
        </li>
        <li>
          <strong>Hoof Care &amp; Maintenance:</strong> Our booth featured a
          wide array of hoof knives and rasps. In the demanding environment of
          modern cattle farming, the quality of these manual tools is critical
          for preventing lameness and ensuring animal welfare.
        </li>
        <li>
          <strong>Identification &amp; Marking:</strong> We displayed our latest
          ear-notching tools and marking equipment, reflecting the increasing
          importance of traceability in the European food supply chain.
        </li>
        <li>
          <strong>General Surgery &amp; Utility:</strong> From high-grade
          stainless steel scissors to specialized castration tools, we
          demonstrated that &ldquo;Saheeb Quality&rdquo; means durability
          professionals can rely on day after day.
        </li>
      </ul>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        The Personal Touch
      </h3>
      <p className='text-gray-600 leading-relaxed mb-8'>
        The images from our 2019 booth capture more than just products; they
        capture the partnerships we build. Meeting with local veterinarians and
        farm managers allowed us to gather direct feedback, ensuring that our
        manufacturing process remains responsive to the actual challenges faced
        in the stalls and pastures of Poland.
      </p>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        Key Takeaways from the 2019 Exhibition
      </h3>
      <DataTable
        rows={[
          {
            label: 'Material Quality',
            value:
              'Continued use of surgical-grade stainless steel for longevity.',
          },
          {
            label: 'Ergonomics',
            value:
              'Tools designed for comfort during repetitive veterinary tasks.',
          },
          {
            label: 'Market Expansion',
            value:
              'Strengthening our presence in the vibrant Polish agricultural sector.',
          },
        ]}
      />
    </section>
  )
}

function Ferma2020() {
  return (
    <section id='ferma-2020' className='scroll-mt-24'>
      <div className='border-l-4 border-primary pl-6 mb-8'>
        <span className='text-sm font-bold text-primary uppercase tracking-widest'>
          Ferma Poland 2020 · Łódź, Poland
        </span>
        <h2 className='text-2xl md:text-3xl font-black text-gray-900 mt-2'>
          Resilience and Precision: A Look Back at Ferma Poland 2020
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        <ExhibitionImage
          src='/Exhibitions/2020 ferma poland/2020 ferma poland-01.jpeg'
          alt='Ferma Poland 2020 booth'
        />
        <ExhibitionImage
          src='/Exhibitions/2020 ferma poland/2020 ferma poland-02.jpeg'
          alt='Ferma Poland 2020 display'
        />
      </div>

      <p className='text-gray-600 leading-relaxed mb-6'>
        The Ferma 2020 exhibition in Łódź remains a standout memory for our
        manufacturing team. Taking place in the familiar Expo and MOSiR halls,
        it served as a vital meeting point for the &ldquo;Big Three&rdquo; of
        Polish livestock: cattle, pigs, and poultry. As a manufacturer of
        surgical instruments, 2020 was a year where we emphasized reliability
        and long-term durability during an era of global uncertainty.
      </p>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        2020: The Year of Practical Science
      </h3>
      <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-6'>
        <li>
          <strong>The Vet-Tech Focus:</strong> A significant portion of the fair
          was dedicated to veterinary medicines, preparations, and high-spec
          surgical instruments.
        </li>
        <li>
          <strong>Combating Disease:</strong> Major panel discussions focused on
          ASF (African Swine Fever) and other diseases, highlighting the
          critical need for high-quality diagnostic and surgical tools to
          maintain biosecurity.
        </li>
        <li>
          <strong>Sustainable Genetics:</strong> From genetics to feed
          distribution, the exhibition showcased how high-quality breeding
          requires equally high-quality medical infrastructure to thrive.
        </li>
      </ul>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        Manufacturing Insights from the 2020 Booth
      </h3>
      <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-6'>
        <li>
          <strong>Biosecurity First:</strong> We highlighted tools designed for
          easy, deep-level sterilization—a feature that became even more
          critical in the months following the 2020 show.
        </li>
        <li>
          <strong>Large-Scale Precision:</strong> With Poland being a top EU
          producer of milk and poultry, our specialized obstetric and orthopedic
          instruments for large animals were a major draw for professionals
          looking to minimize animal recovery times.
        </li>
        <li>
          <strong>Local Commitment:</strong> Despite exhibitors coming from 12
          different countries, Ferma 2020 allowed us to reinforce our direct
          support for the local Polish agricultural market.
        </li>
      </ul>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        Ferma 2020 Snapshot
      </h3>
      <DataTable
        rows={[
          { label: 'Location', value: 'Łódź, Poland (Expo & MOSiR Halls)' },
          { label: 'Visitors', value: 'Nearly 18,000 industry experts' },
          {
            label: 'Exhibitors',
            value: 'Approx. 200 companies from 12 countries',
          },
          {
            label: 'Core Themes',
            value: 'Biosecurity, Veterinary Precision, and Animal Welfare',
          },
        ]}
      />
    </section>
  )
}

function Ferma2024() {
  return (
    <section id='ferma-2024' className='scroll-mt-24'>
      <div className='border-l-4 border-primary pl-6 mb-8'>
        <span className='text-sm font-bold text-primary uppercase tracking-widest'>
          Ferma Poland 2024 · Łódź, Poland
        </span>
        <h2 className='text-2xl md:text-3xl font-black text-gray-900 mt-2'>
          Innovation Returns to Łódź: Celebrating Ferma Poland 2024
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        <ExhibitionImage
          src='/Exhibitions/2024 Ferma poland/2024 Ferma poland-01.jpeg'
          alt='Ferma Poland 2024 booth'
        />
        <ExhibitionImage
          src='/Exhibitions/2024 Ferma poland/2024 Ferma poland-02.jpeg'
          alt='Ferma Poland 2024 display'
        />
      </div>

      <p className='text-gray-600 leading-relaxed mb-6'>
        The return of the Ferma Fair to Łódź in 2024 was more than just a change
        of venue; it was a homecoming for the Polish livestock industry. With
        nearly 200 exhibitors from 12 countries—including Germany, the UK, the
        Netherlands, and Ukraine—the event attracted 17,985 experts focused on
        the future of breeding and animal health.
      </p>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        A Specialized Focus on Veterinary Excellence
      </h3>
      <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-6'>
        <li>
          <strong>Veterinary Solutions:</strong> The exhibition showcased a rich
          offer of veterinary medicines, preparations, and specialized equipment
          essential for modern breeding management.
        </li>
        <li>
          <strong>Advanced Technology:</strong> From milking robots to
          sophisticated breeding management applications, the fair highlighted
          how hardware and software are merging to improve animal welfare.
        </li>
        <li>
          <strong>World Premieres:</strong> 2024 saw significant innovations,
          such as ADV Genetics&apos; Hyperin CluStar (a new approach to
          mastitis) and Euromilk&apos;s EM QUBE feeding system, proving that
          Poland is a hub for global product debuts.
        </li>
      </ul>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        Tackling Industry Challenges
      </h3>
      <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-6'>
        <li>
          <strong>Biosecurity &amp; Health:</strong> Panel discussions focused
          heavily on threats like African Swine Fever (ASF) and other diseases,
          emphasizing why high-quality surgical and diagnostic tools are the
          first line of defense in maintaining a healthy herd.
        </li>
        <li>
          <strong>Sustainability &amp; Emissions:</strong> Dairy and beef cattle
          breeders explored innovative ways to reduce methane emissions and
          improve cow welfare, aligning with new global ESG reporting standards.
        </li>
        <li>
          <strong>Renewable Energy:</strong> A major focus was placed on biogas
          plants as a way to save the animal production sector, reflecting a
          shift toward more circular and sustainable farming models.
        </li>
      </ul>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        Saheeb Manufacturing: Meeting the Demand for Precision
      </h3>
      <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-6'>
        <li>
          <strong>Durability for the Modern Farm:</strong> As profitability
          fluctuations put pressure on farmers, our tools offer a &ldquo;buy it
          once&rdquo; level of durability that reduces long-term costs.
        </li>
        <li>
          <strong>Expertise in Every Blade:</strong> Whether for swine, poultry,
          or cattle, our instruments are designed to support the
          &ldquo;first-time-right&rdquo; medical interventions discussed during
          the fair&apos;s technical forums.
        </li>
      </ul>

      <h3 className='text-xl font-bold text-gray-900 mb-4'>
        2024 Exhibition Highlights
      </h3>
      <DataTable
        rows={[
          { label: 'Visitors', value: '17,985 industry experts' },
          {
            label: 'International Presence',
            value: 'Companies from 12 countries',
          },
          {
            label: 'Key Themes',
            value: 'ASF prevention, Biogas, and Genomic innovation',
          },
          { label: 'Venue', value: 'EXPO and MOSiR halls, Łódź' },
        ]}
      />
    </section>
  )
}

/* ── Main Page ─────────────────────────────────────────── */

const events = [
  { id: 'eurotier-2016', label: 'EuroTier 2016' },
  { id: 'eurotier-2018', label: 'EuroTier 2018' },
  { id: 'eurotier-2022', label: 'EuroTier 2022' },
  { id: 'ferma-2019', label: 'Ferma 2019' },
  { id: 'ferma-2020', label: 'Ferma 2020' },
  { id: 'ferma-2024', label: 'Ferma 2024' },
]

export default function ExhibitionsPage() {
  return (
    <main className='min-h-screen pt-20 bg-white'>
      {/* Hero Banner */}
      <div className='bg-gray-50 py-16 border-b border-gray-100'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight'>
            Exhibitions &amp; <span className='text-primary'>Events</span>
          </h1>
          <div className='w-20 h-1 bg-primary mt-4' />
          <p className='text-gray-500 mt-4 max-w-2xl text-lg'>
            Showcasing our legacy of precision and innovation at the
            world&apos;s leading veterinary and livestock exhibitions.
          </p>
        </div>
      </div>

      <div className='container mx-auto px-4 py-12'>
        <div className='flex flex-col md:flex-row gap-12'>
          {/* Sidebar Navigation */}
          <aside className='w-full md:w-64 shrink-0'>
            <nav className='sticky top-24 space-y-1'>
              {events.map((event) => (
                <a
                  key={event.id}
                  href={`#${event.id}`}
                  className='block px-4 py-3 text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-primary hover:bg-primary/5 border-l-2 border-transparent hover:border-primary transition-all'
                >
                  {event.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className='flex-1 space-y-24'>
            <EuroTier2016 />
            <EuroTier2018 />
            <EuroTier2022 />
            <Ferma2019 />
            <Ferma2020 />
            <Ferma2024 />
          </div>
        </div>
      </div>
    </main>
  )
}

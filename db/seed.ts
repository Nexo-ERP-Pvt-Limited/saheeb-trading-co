import dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { subCategories, products } from './schema'

dotenv.config({ path: '.env.local' })

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const db = drizzle(pool)

// ─── Categories ────────────────────────────────────────
// const seedCategories = [{ name: 'Veterinary Items', slug: 'veterinary-items' }]

// ─── Sub-Categories ────────────────────────────────────
// Use the EXACT category slug from above in `categorySlug` to link them
// const seedSubCategories = [
//   { name: 'Hoof Scraper', slug: 'hoof-scraper', categorySlug: 'veterinary-items' },
// ]

// ─── Products ──────────────────────────────────────────
// Use the EXACT sub-category slug from above in `subCategorySlug` to link them
// Set subCategorySlug to null if the product has no sub-category
const seedProducts = [
  {
    title: 'Hoof Scraper',
    description: 'Hoof Scraper Stainless Steel',
    sku: 'A-019',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413663/saheeb-trading-co/hoof-scraper/hoof-scraper-a019_pod6b0.jpg',
    active: true,
    subCategorySlug: 'hoof-scraper',
  },
  {
    title: 'Hoof Scraper',
    description: 'Shoing Hammer With Claw',
    sku: 'C-021',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413662/saheeb-trading-co/hoof-scraper/hoof-scraper-c021_jyebgr.jpg',
    active: true,
    subCategorySlug: 'hoof-scraper',
  },
  {
    title: 'Hoof Scraper',
    description: 'Hoof Cutter CS Black Finish 30 cm',
    sku: 'D-022',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413665/saheeb-trading-co/hoof-scraper/hoof-scraper-d022_fyfj9n.jpg',
    active: true,
    subCategorySlug: 'hoof-scraper',
  },
  {
    title: 'Hoof Scraper',
    description: 'Hoof and Claw Cutter Green Painted',
    sku: 'E-023',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413661/saheeb-trading-co/hoof-scraper/610305491_247_pic_3_nnbqcq.jpg',
    active: true,
    subCategorySlug: 'hoof-scraper',
  },
  {
    title: 'Hoof Scraper',
    description: 'Hoof Cleaner CS Rubber Coated',
    sku: 'F-024',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413660/saheeb-trading-co/hoof-scraper/80624917_248_pic_3_bvcszn.jpg',
    active: true,
    subCategorySlug: 'hoof-scraper',
  },
  {
    title: 'Hoof Scraper',
    description: 'Farriers Buffer CS Painted',
    sku: 'G-025',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413661/saheeb-trading-co/hoof-scraper/241417668_249_pic_3_bfkekj.jpg',
    active: true,
    subCategorySlug: 'hoof-scraper',
  },
  {
    title: 'Hoof Scraper',
    description: 'Hoof Cleaner CS Wooden Handle',
    sku: 'H-026',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413661/saheeb-trading-co/hoof-scraper/844666192_250_pic_3_jistoz.jpg',
    active: true,
    subCategorySlug: 'hoof-scraper',
  },
  {
    title: 'Hoof Rasp',
    description: 'Hoof Rasp CSNP   35 x 4 cm Straight',
    sku: 'B-130',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413694/saheeb-trading-co/hoof-rasp/hoof-rasp-b130_dfmnq4.jpg',
    active: true,
    subCategorySlug: 'hoof-rasp',
  },
  {
    title: 'Hoof Rasp',
    description: 'Hoof Rasp S Shape CSNP 30 x cm',
    sku: 'C-031',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413694/saheeb-trading-co/hoof-rasp/hoof-rasp-c031_txtgsh.jpg',
    active: true,
    subCategorySlug: 'hoof-rasp',
  },
  {
    title: 'Anti Kick Bar',
    description: 'Anti Kick Bar Galvanized',
    sku: 'C-173',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413739/saheeb-trading-co/anti-kick-bar/922617927_173_pic_3_au8ddj.jpg',
    active: true,
    subCategorySlug: 'anti-kick-bar',
  },
  {
    title: 'Balling Gun',
    description: 'Balling Gun CP, With Metal 58 cm',
    sku: 'B-142',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413789/saheeb-trading-co/balling-guns/balling-gun-b142_uluyee.jpg',
    active: true,
    subCategorySlug: 'balling-gun',
  },
  {
    title: 'Balling Gun',
    description: 'Balling Gun CP With Metal 54 cm',
    sku: 'D-144',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413792/saheeb-trading-co/balling-guns/balling-gun-d144_hgpoea.jpg',
    active: true,
    subCategorySlug: 'balling-gun',
  },
  {
    title: 'Balling Gun',
    description: 'Balling Gun CP Metal 43 cm',
    sku: 'F-146',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413790/saheeb-trading-co/balling-guns/balling-gun-f146_tjbrai.jpg',
    active: true,
    subCategorySlug: 'balling-gun',
  },
  {
    title: 'Bit',
    description: 'Dee Bit SS, Witth Steel Rollers',
    sku: 'B-268',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413859/saheeb-trading-co/bits/bits-b268_h4gvwg.jpg',
    active: true,
    subCategorySlug: 'bit',
  },
  {
    title: 'Bit',
    description: 'Snaffle',
    sku: 'D-270',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413857/saheeb-trading-co/bits/bit-d270_zskpsx.jpg',
    active: true,
    subCategorySlug: 'bit',
  },
  {
    title: 'Bit',
    description: 'Fggbutt Snaffle Hollow SS',
    sku: 'F-272',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413858/saheeb-trading-co/bits/bit-f272_kaunpl.jpg',
    active: true,
    subCategorySlug: 'bit',
  },
  {
    title: 'Bull Holder',
    description: 'Bull Holder Eisenhut SS 42 cm',
    sku: 'A-174',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413908/saheeb-trading-co/bull-holder/bull-holder-a174_wihuxq.jpg',
    active: true,
    subCategorySlug: 'bull-holder',
  },
  {
    title: 'Bull Holder',
    description: 'Bull Holder Self Locking Brass 8 cm',
    sku: 'B-176',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413909/saheeb-trading-co/bull-holder/bull-holder-b176_cg5g4l.jpg',
    active: true,
    subCategorySlug: 'bull-holder',
  },
  {
    title: 'Bull Holder',
    description: 'Bull Holder Harms CSNP 19 cm',
    sku: 'D-179',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413911/saheeb-trading-co/bull-holder/bull-holder-d179_cgsxlu.jpg',
    active: true,
    subCategorySlug: 'bull-holder',
  },
  {
    title: 'Bull Holder',
    description: ' Bull Holder CP Heavy 17 cm',
    sku: 'E-180',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413913/saheeb-trading-co/bull-holder/bull-holder-e180_ypgluo.jpg',
    active: true,
    subCategorySlug: 'bull-holder',
  },
  {
    title: 'Bull Ring',
    description: 'Pig Ring Applicator SS 26 cm',
    sku: 'A-045',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413948/saheeb-trading-co/bull-rings/bull-ring-a045_hmhotu.jpg',
    active: true,
    subCategorySlug: 'bull-ring',
  },
  {
    title: 'Bull Ring',
    description: 'Bull Ring Applicator SS 33 cm',
    sku: 'C-047',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413949/saheeb-trading-co/bull-rings/bull-ring-c047_zsc0lp.jpg',
    active: true,
    subCategorySlug: 'bull-ring',
  },
  {
    title: 'Bull Ring',
    description: 'Bull Ring SS 52-54 mm',
    sku: 'D-048',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413952/saheeb-trading-co/bull-rings/bull-ring-d048_gojuty.jpg',
    active: true,
    subCategorySlug: 'bull-ring',
  },
  {
    title: 'Bull Ring',
    description: 'Bull RIng SS 52-54 mm',
    sku: 'E-050',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413953/saheeb-trading-co/bull-rings/bull-ring-e050_teasqg.jpg',
    active: true,
    subCategorySlug: 'bull-ring',
  },
  {
    title: 'Bull Ring',
    description: 'Bull RIng Copper 52-54 mm',
    sku: 'F-052',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413957/saheeb-trading-co/bull-rings/bull-ring-f052_kdfxo7.jpg',
    active: true,
    subCategorySlug: 'bull-ring',
  },
  {
    title: 'Bull Ring',
    description: 'Bull RIng CSNP 52- 54 mm',
    sku: 'G-054',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413958/saheeb-trading-co/bull-rings/bull-ring-g054_lgoj7a.jpg',
    active: true,
    subCategorySlug: 'bull-ring',
  },
  {
    title: 'Bull Ring',
    description: ' Bull Ring SS 65 mm',
    sku: 'H-057',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413961/saheeb-trading-co/bull-rings/bull-ring-h057_uquioe.jpg',
    active: true,
    subCategorySlug: 'bull-ring',
  },
  {
    title: 'Castration',
    description: 'Castration Forceps SS 23 cm',
    sku: 'A-121',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414000/saheeb-trading-co/Castration/73975061_191_pic_3_pnwcvo.jpg',
    active: true,
    subCategorySlug: 'castration',
  },
  {
    title: 'Castration',
    description: 'Castration Forceps SS 48 cm with Knee Piece',
    sku: 'C-127',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414048/saheeb-trading-co/Castration/736625177_192_pic_3_shelg3.jpg',
    active: true,
    subCategorySlug: 'castration',
  },

  {
    title: 'Cattle Weaner',
    description: 'Cattle Weaner Aluminium Krause',
    sku: 'A-148',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414230/saheeb-trading-co/cattle-weaner/cattle-weaner-a148_srka1j.jpg',
    active: true,
    subCategorySlug: 'cattle-weaner',
  },
  {
    title: 'Cattle Weaner',
    description: 'Cattle Weaner With Spring Plane Aluminium',
    sku: 'B-149',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414229/saheeb-trading-co/cattle-weaner/962320372_194_pic_3_rlmv3s.jpg',
    active: true,
    subCategorySlug: 'cattle-weaner',
  },
  {
    title: 'Cattle Weaner',
    description: 'Cattle Weaner With Spring Spiked Aluminium',
    sku: 'B-150',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414211/saheeb-trading-co/cattle-weaner/110750815_195_pic_3_pgvns0.jpg',
    active: true,
    subCategorySlug: 'cattle-weaner',
  },
  {
    title: 'Cattle Weaner',
    description: 'Cattle Weaner Rubber',
    sku: 'D-152',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414216/saheeb-trading-co/cattle-weaner/410764604_196_pic_3_egfu2c.jpg',
    active: true,
    subCategorySlug: 'cattle-weaner',
  },
  {
    title: 'Cattle Weaner',
    description: 'Cattle Weaner CS Legeard Small',
    sku: 'E-153',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414223/saheeb-trading-co/cattle-weaner/424022985_197_pic_3_wlg43m.jpg',
    active: true,
    subCategorySlug: 'cattle-weaner',
  },
  {
    title: 'Cattle Weaner',
    description: 'Cattle Weaner CS Medium',
    sku: 'F-154',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414224/saheeb-trading-co/cattle-weaner/721625730_198_pic_3_n8whrn.jpg',
    active: true,
    subCategorySlug: 'cattle-weaner',
  },
  {
    title: 'Cattle Weaner',
    description: 'Cattle Weaner CS Large',
    sku: 'G-155',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414213/saheeb-trading-co/cattle-weaner/187453377_199_pic_3_qa2vhb.jpg',
    active: true,
    subCategorySlug: 'cattle-weaner',
  },
  {
    title: 'Cattle Hobble',
    description: 'Cattle Hobble Leather and Chain',
    sku: 'A-184',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414256/saheeb-trading-co/cattle-hobble/822205229_200_pic_3_kze9en.jpg',
    active: true,
    subCategorySlug: 'cattle-hobble',
  },
  {
    title: 'Cattle Hobble',
    description: 'Cattle Hobble Nylon and Chain',
    sku: 'C-185',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414249/saheeb-trading-co/cattle-hobble/592527241_201_pic_3_rifcn5.jpg',
    active: true,
    subCategorySlug: 'cattle-hobble',
  },
  {
    title: 'Cattle Hobble',
    description: 'Cattle Hobble Nylon with Leather Linning',
    sku: 'D-186',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414251/saheeb-trading-co/cattle-hobble/731410384_202_pic_3_zckjor.jpg',
    active: true,
    subCategorySlug: 'cattle-hobble',
  },
  {
    title: 'Dehorner',
    description: 'Dehorner SS Wooden Handle 33 CM',
    sku: 'A-068',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414281/saheeb-trading-co/dehorner/13345598_203_pic_3_nlbpvi.jpg',
    active: true,
    subCategorySlug: 'dehorner',
  },
  {
    title: 'Dehorner',
    description: 'Dehorner SS With Grip 43 cm',
    sku: 'B-069',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414287/saheeb-trading-co/dehorner/783804121_204_pic_3_d7pzvw.jpg',
    active: true,
    subCategorySlug: 'dehorner',
  },

  {
    title: 'Elastrator',
    description: 'Elastrator Forceps SS',
    sku: 'C-131',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414315/saheeb-trading-co/elastrator/elastrator-c131_rltngo.jpg',
    active: true,
    subCategorySlug: 'elastrator',
  },
  {
    title: 'Elastrator',
    description: 'Elastrator Forceps CSNP',
    sku: 'C-132',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414320/saheeb-trading-co/elastrator/elastrator-c132_y8xis1.jpg',
    active: true,
    subCategorySlug: 'elastrator',
  },
  {
    title: 'Elastrator',
    description: 'Elastrater Forceps Pewter NP',
    sku: 'D-133',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414326/saheeb-trading-co/elastrator/elastrator-d133_u0mkat.jpg',
    active: true,
    subCategorySlug: 'elastrator',
  },

  {
    title: 'Forceps & Needle Holder',
    description: 'Haussmann Emasculator SS Str 19 cm',
    sku: 'A-128',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414383/saheeb-trading-co/forceps-needle-holder/Forceps-Needle-Holder-a128_d8tieo.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
  {
    title: 'Forceps & Needle Holder',
    description: 'Haussmann Emasculator SS Str 23 cm',
    sku: 'A-129',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414385/saheeb-trading-co/forceps-needle-holder/Forceps-Needle-Holders-a129_dven12.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
  {
    title: 'Forceps & Needle Holder',
    description: 'Buhner Insertion Needle SS 30 cm',
    sku: 'A-204',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414380/saheeb-trading-co/forceps-needle-holder/944417064_210_pic_3_uhfajc.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
  {
    title: 'Forceps & Needle Holder',
    description: 'Obstetric Hook SS 34 cm',
    sku: 'B-136',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414448/saheeb-trading-co/forceps-needle-holder/Forceps_Needle_Holders-b136_wcxf4y.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
  {
    title: 'Forceps & Needle Holder',
    description: 'Oral Cannula Threaded',
    sku: 'B-229',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414373/saheeb-trading-co/forceps-needle-holder/756673251_213_pic_3_cr0wl8.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
  {
    title: 'Forceps & Needle Holder',
    description: 'Obstetric Forceps SS 52 cm',
    sku: 'D-137',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414369/saheeb-trading-co/forceps-needle-holder/691252334_214_pic_3_yxywxa.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
  {
    title: 'Forceps & Needle Holder',
    description: 'Hoof Testing Forceps Vienna Pattern SS',
    sku: 'D-299',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414380/saheeb-trading-co/forceps-needle-holder/873936154_215_pic_3_ddpa6y.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
  {
    title: 'Forceps & Needle Holder',
    description: 'Obstetric Forceps SS 45 cm',
    sku: 'E-138',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414379/saheeb-trading-co/forceps-needle-holder/788494025_216_pic_3_v5blka.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
  {
    title: 'Forceps & Needle Holder',
    description: 'Hoof Forceps',
    sku: 'E-300',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414359/saheeb-trading-co/forceps-needle-holder/454418072_217_pic_3_gbigrr.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
  {
    title: 'Forceps & Needle Holder',
    description: 'Uterine Forceps SS With Rubber Jaws 28 cm',
    sku: 'F-139',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414365/saheeb-trading-co/forceps-needle-holder/520822306_218_pic_3_aog2ax.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
  {
    title: 'Forceps & Needle Holder',
    description: 'Mathieu Needle Holder SS 14 cm',
    sku: 'F-210',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771414362/saheeb-trading-co/forceps-needle-holder/486245408_219_pic_3_pnhvkf.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
  {
    title: 'Forceps & Needle Holder',
    description: 'Peon Forceps SS Str 14 cm',
    sku: 'G-212',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771422230/saheeb-trading-co/forceps-needle-holder/167833596_220_pic_3_hrdsjd.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
  {
    title: 'Forceps & Needle Holder',
    description: 'B.P Handle No 4 SS',
    sku: 'J-216',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771422418/saheeb-trading-co/forceps-needle-holder/361702705_222_pic_3_z76sk2.jpg',
    active: true,
    subCategorySlug: 'forceps-needle-holder',
  },
]

// ─── Seed Runner ───────────────────────────────────────
async function seed() {
  console.log('🌱 Seeding database...\n')

  // 1. Look up existing sub-categories from DB
  console.log('📂 Loading existing sub-categories...')
  const existingSubCats = await db.select().from(subCategories)
  const subCategoryMap = new Map(existingSubCats.map((sc) => [sc.slug, sc.id]))
  console.log(`   Found ${existingSubCats.length} sub-categories\n`)

  // 2. Insert products (resolve subCategorySlug → subCategoryId)
  console.log(`📦 Inserting ${seedProducts.length} products...`)
  const productValues = seedProducts.map((p) => {
    let subCategoryId: string | null = null
    if (p.subCategorySlug) {
      subCategoryId = subCategoryMap.get(p.subCategorySlug) ?? null
      if (!subCategoryId) {
        console.warn(
          `⚠️  Sub-category slug "${p.subCategorySlug}" not found for product "${p.title}" — inserting without sub-category`,
        )
      }
    }
    return {
      title: p.title,
      description: p.description,
      sku: p.sku,
      image: p.image,
      active: p.active,
      subCategoryId,
    }
  })

  await db.insert(products).values(productValues)
  console.log(`   ✅ Done\n`)

  console.log('🎉 Seeding complete!')
  await pool.end()
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})

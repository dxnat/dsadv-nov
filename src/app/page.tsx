import {
  Add01Icon,
  ArrowRight01Icon,
  Delete02Icon,
  Download01Icon,
  Search01Icon,
  Settings01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import {
  Button,
  type ButtonSize,
  type ButtonVariant,
} from "@/components/ui/Button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  type DialogSize,
} from "@/components/ui/Dialog"
import { FundCard, type FundCardProps } from "@/components/ui/FundCard"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"

const buttonVariants: { value: ButtonVariant; label: string }[] = [
  { value: "default", label: "หลัก" },
  { value: "secondary", label: "รอง" },
  { value: "outline", label: "เส้นขอบ" },
  { value: "ghost", label: "โปร่งใส" },
  { value: "destructive", label: "ลบ" },
  { value: "link", label: "ลิงก์" },
]

const textSizes: ButtonSize[] = ["xs", "sm", "default", "lg"]
const iconSizes: ButtonSize[] = ["icon-xs", "icon-sm", "icon", "icon-lg"]

const dialogSizes: { value: DialogSize; label: string }[] = [
  { value: "sm", label: "เล็ก (sm)" },
  { value: "default", label: "ปกติ (default)" },
  { value: "lg", label: "ใหญ่ (lg)" },
  { value: "xl", label: "ใหญ่พิเศษ (xl)" },
]

const priceDate = new Date(2026, 10, 13)

const fundOptions: FundCardProps[] = [
  {
    name: "อนุรักษ์นิยม (Conservative)",
    manager: "ซิดนีย์ฮาร์เบอร์ แอสเซ็ท แมเนจเมนต์",
    unitPrice: 1.2045,
    priceDate,
    image: { src: "/funds/conservative.svg", alt: "ภาพประกอบคลื่นทะเลสงบ" },
  },
  {
    name: "สมดุล (Balanced)",
    manager: "เซาเทิร์นครอส อินเวสเตอร์ส",
    unitPrice: 1.8342,
    priceDate,
    image: { src: "/funds/balanced.svg", alt: "ภาพประกอบแผนภูมิวงกลม" },
  },
  {
    name: "เติบโตสูง (High Growth)",
    manager: "ยูคาลิปตัส แคปิตอล",
    unitPrice: 2.4518,
    priceDate,
    image: { src: "/funds/high-growth.svg", alt: "ภาพประกอบกราฟแท่งขาขึ้น" },
  },
  {
    name: "ลงทุนอย่างยั่งยืนเพื่อสิ่งแวดล้อมและสังคม (Sustainable ESG Growth)",
    manager: "แทสมัน ซัสเทนเนเบิล อินเวสต์เมนต์ส",
    unitPrice: 1.5527,
    priceDate,
  },
]

export default function Page() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-12 px-4 py-10 sm:px-6">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">
          ระบบดีไซน์ · คอมโพเนนต์ทั้งหมด
        </h1>
        <p className="text-muted-foreground">
          รวมคอมโพเนนต์ทุกตัวพร้อมรูปแบบ (variant) ขนาด และสถานะต่าง ๆ
          สำหรับใช้ตรวจสอบหน้าตาของระบบดีไซน์ กด <Kbd>d</Kbd> เพื่อสลับโหมดมืด
        </p>
      </header>

      {/* ---------- Button ---------- */}
      <Section
        title="ปุ่ม (Button)"
        description="props: variant, size, fullWidth, disabled, aria-invalid"
      >
        <Demo label="รูปแบบ (variant)">
          {buttonVariants.map((v) => (
            <Button key={v.value} variant={v.value}>
              {v.label}
            </Button>
          ))}
        </Demo>

        <Demo label="ขนาด (size)">
          {textSizes.map((size) => (
            <Button key={size} size={size}>
              ขนาด {size}
            </Button>
          ))}
        </Demo>

        <Demo label="ปุ่มไอคอน (icon sizes)">
          {iconSizes.map((size) => (
            <Button
              key={size}
              size={size}
              variant="outline"
              aria-label="ตั้งค่า"
            >
              <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
            </Button>
          ))}
        </Demo>

        <Demo label="ปุ่มพร้อมไอคอน">
          <Button>
            <HugeiconsIcon
              icon={Add01Icon}
              strokeWidth={2}
              data-icon="inline-start"
            />
            เพิ่มเงินสมทบ
          </Button>
          <Button variant="secondary">
            ดูรายละเอียด
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              strokeWidth={2}
              data-icon="inline-end"
            />
          </Button>
          <Button variant="outline">
            <HugeiconsIcon
              icon={Download01Icon}
              strokeWidth={2}
              data-icon="inline-start"
            />
            ดาวน์โหลดใบแจ้งยอด
          </Button>
          <Button variant="destructive">
            <HugeiconsIcon
              icon={Delete02Icon}
              strokeWidth={2}
              data-icon="inline-start"
            />
            ลบบัญชี
          </Button>
        </Demo>

        <Demo label="สถานะ (states)">
          <Button disabled>ปิดใช้งาน</Button>
          <Button variant="outline" disabled>
            ปิดใช้งาน
          </Button>
          <Button variant="outline" aria-invalid>
            ข้อมูลไม่ถูกต้อง
          </Button>
        </Demo>

        <Demo label="เต็มความกว้าง (fullWidth)" stacked>
          <Button fullWidth>เข้าสู่ระบบ</Button>
          <Button fullWidth variant="outline">
            สมัครสมาชิก
          </Button>
        </Demo>
      </Section>

      {/* ---------- Input + Label ---------- */}
      <Section
        title="ช่องกรอกข้อมูล (Input) และป้ายกำกับ (Label)"
        description="Input props: variant (filled | outline) · Label props: required"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="แบบพื้นทึบ (filled)" htmlFor="filled">
            <Input id="filled" placeholder="ชื่อ-นามสกุล" />
          </Field>
          <Field label="แบบเส้นขอบ (outline)" htmlFor="outline">
            <Input id="outline" variant="outline" placeholder="ชื่อ-นามสกุล" />
          </Field>
          <Field label="อีเมล" htmlFor="email" required>
            <Input id="email" type="email" placeholder="you@example.com" />
          </Field>
          <Field label="รหัสผ่าน" htmlFor="password" required>
            <Input id="password" type="password" defaultValue="password123" />
          </Field>
          <Field label="ข้อมูลไม่ถูกต้อง (aria-invalid)" htmlFor="invalid">
            <Input
              id="invalid"
              aria-invalid
              defaultValue="123-456"
              aria-describedby="invalid-hint"
            />
            <p id="invalid-hint" className="text-xs text-destructive">
              เลขประจำตัวผู้เสียภาษี (TFN) ต้องมี 9 หลัก
            </p>
          </Field>
          <Field label="ปิดใช้งาน (disabled)" htmlFor="disabled">
            <Input id="disabled" disabled defaultValue="แก้ไขไม่ได้" />
          </Field>
          <Field label="อัปโหลดไฟล์" htmlFor="file">
            <Input id="file" type="file" />
          </Field>
          <Field label="ค้นหา" htmlFor="search">
            <div className="flex gap-2">
              <Input id="search" type="search" placeholder="ค้นหากองทุน" />
              <Button size="icon" variant="secondary" aria-label="ค้นหา">
                <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
              </Button>
            </div>
          </Field>
        </div>
      </Section>

      {/* ---------- FundCard ---------- */}
      <Section
        title="การ์ดกองทุน (FundCard)"
        description="props: name, manager, unitPrice, priceDate?, image?"
      >
        <Demo
          label="ทางเลือกการลงทุน (ใบสุดท้ายไม่มีรูป และชื่อยาว)"
          stacked={false}
        >
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
            {fundOptions.map((fund) => (
              <FundCard key={fund.name} {...fund} />
            ))}
          </div>
        </Demo>
      </Section>

      {/* ---------- Dialog ---------- */}
      <Section
        title="กล่องโต้ตอบ (Dialog)"
        description="DialogContent props: size, showCloseButton · DialogFooter props: showCloseButton"
      >
        <Demo label="ขนาด (size)">
          {dialogSizes.map((s) => (
            <Dialog key={s.value}>
              <DialogTrigger render={<Button variant="outline" />}>
                {s.label}
              </DialogTrigger>
              <DialogContent size={s.value}>
                <DialogHeader>
                  <DialogTitle>กล่องโต้ตอบขนาด {s.label}</DialogTitle>
                  <DialogDescription>
                    ตัวอย่างความกว้างสูงสุดของกล่องโต้ตอบในขนาดนี้
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter showCloseButton />
              </DialogContent>
            </Dialog>
          ))}
        </Demo>

        <Demo label="ตัวอย่างฟอร์ม">
          <Dialog>
            <DialogTrigger render={<Button />}>แก้ไขข้อมูลบัญชี</DialogTrigger>
            <DialogContent size="sm">
              <DialogHeader>
                <DialogTitle>แก้ไขข้อมูลบัญชี</DialogTitle>
                <DialogDescription>
                  อัปเดตข้อมูลส่วนตัวของคุณ แล้วกดบันทึกเมื่อเสร็จสิ้น
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <Field label="ชื่อ-นามสกุล" htmlFor="dlg-name" required>
                  <Input id="dlg-name" defaultValue="สมชาย ใจดี" />
                </Field>
                <Field label="อีเมล" htmlFor="dlg-email" required>
                  <Input
                    id="dlg-email"
                    type="email"
                    defaultValue="somchai@example.com"
                  />
                </Field>
                <Field label="เบอร์โทรศัพท์" htmlFor="dlg-phone">
                  <Input id="dlg-phone" type="tel" placeholder="04xx xxx xxx" />
                </Field>
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  ยกเลิก
                </DialogClose>
                <DialogClose render={<Button />}>บันทึก</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger render={<Button variant="destructive" />}>
              ยืนยันการลบ
            </DialogTrigger>
            <DialogContent size="sm" showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>ลบบัญชีผู้รับผลประโยชน์?</DialogTitle>
                <DialogDescription>
                  การลบนี้ไม่สามารถย้อนกลับได้
                  ข้อมูลผู้รับผลประโยชน์จะถูกลบออกจากบัญชีของคุณ
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  ยกเลิก
                </DialogClose>
                <DialogClose render={<Button variant="destructive" />}>
                  ลบ
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Demo>
      </Section>
    </main>
  )
}

/* ---------- Page-only layout helpers ---------- */

function Section({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 border-b pb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="font-mono text-xs text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  )
}

function Demo({
  label,
  stacked = false,
  children,
}: {
  label: string
  stacked?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium text-muted-foreground">{label}</h3>
      <div
        className={
          stacked
            ? "flex max-w-sm flex-col gap-2"
            : "flex flex-wrap items-center gap-2"
        }
      >
        {children}
      </div>
    </div>
  )
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="grid content-start gap-2">
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>
      {children}
    </div>
  )
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border bg-muted px-1.5 font-mono text-xs">
      {children}
    </kbd>
  )
}

'use client'

import Image from 'next/image'
import { Microwave, Refrigerator, Utensils, Circle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'

interface Tool {
  name: string;
}

interface Ingredient {
  name: string;
  amount: string;
  cost: number;
}

interface Step {
  description: string;
  image?: string;
}

// Mock Data
const recipesData = [
  {
    foodName: "ไดฟุกุ",
    slug: "daifuku", // Add a slug for easy matching
    ingredients: [
      { name: "แป้งข้าวเหนียว", amount: "1 + 1/2 ถ้วย", cost: 46 }, // ราคาประมาณ 35 บาทต่อถุง 500 กรัม
      { name: "แป้งมัน", amount: "1 ช้อนโต๊ะ", cost: 18 }, // ราคาประมาณ 20 บาทต่อถุง 500 กรัม
      { name: "น้ำตาลทราย", amount: "5 ช้อนโต๊ะ", cost: 26 }, // ราคาประมาณ 25 บาทต่อถุง 1 กิโลกรัม
      { name: "น้ำร้อน", amount: "250 มล.", cost: 7 },
      { name: "ไส้ถั่วแดงกวน", amount: "1 กระป๋อง", cost: 129 }, // ราคาประมาณ 35 บาทต่อกระป๋อง 200 กรัม
      { name: "สตรอเบอรี่", amount: "4 ลูก", cost: 80 }, // ราคาประมาณ 100 บาทต่อกล่อง 250 กรัม
    ],    
    steps: [
      { description: "ใส่แป้งข้าวเหนียว น้ำตาลทราย และน้ำเปล่า ตามอัตราส่วน" },
      { description: "กวนส่วนผสมให้เข้ากันดี สังเกตุจะกลายเป็นเนื้อเเดียวกัน" },
      { description: "ใช้แร็พพลาสติกคลุมภาชนะ ก่อนนำไปให้ความร้อนด้วยไมโครเวฟ 1.30-2 นาที ไฟอ่อนถึงปานกลาง" },
      { description: "นำออกมาคนระบายความร้อน ถ้าเนื้อแป้งยังไม่ใสหรือจับตัวเป็นก้อนให้ทำซ้ำจนใสจึงจะใช้ได้" },
      { description: "โรยผงแป้งเพื่อป้องกันการติดของพื้นผิวแป้ง ก่อนนำแป้งมานวดและแบ่งให้เท่ากันตามความเหมาะสม" },
      { description: "คลึงและแผ่แป้งให้พอดีกับไส้ไดฟูกุที่ปั้นไว้ในตอนแรก ก่อนจะปั้นให้แป้งคลุมไส้ไดฟูกุเป็นอันเสร็จสิ้น" },
    ],    
    tools: [
      { name: "ไมโครเวฟ" },
      { name: "ชามสำหรับกวนแป้ง" },
      { name: "แร็พพลาสติกคลุม" },
      { name: "ถาดรอง" },
      { name: "มีด" },
      { name: "ตะกร้อมือ" },
    ],    
  },
  {
    foodName: "ขนมชั้นชาไทย",
    slug: "kanomchan",
    ingredients: [
      { name: "กะทิ", amount: "250 มล.", cost: 26 },
      { name: "น้ำตาลทราย", amount: "80 กรัม", cost: 26 },
      { name: "เกลือ", amount: "1/4 ช้อนชา", cost: 14 },
      { name: "แป้งขนมชั้น", amount: "100 กรัม", cost: 15 },
      { name: "ผงชาไทยเปล่าสำเร็จรูป 2 ซอง", amount: "40 กรัม", cost: 65 },
      { name: "น้ำเปล่า", amount: "500 มล.", cost: 15 },
      { name: "น้ำมัน", amount: "1 ช้อนชา", cost: 20 },
    ],
    steps: [
      { description: "เทกะทิในถ้วยตวงให้ถึง 250 ml ใส่น้ำตาลในปริมาณ 80 กรัม หรือ 6 ช้อนโต๊ะ เกลือในปริมาณ 1/4 ช้อนชา และแป้งมันปริมาณ 105 กรัม แล้วคนให้เป็นเนื้อเดียวกัน และแบ่งไว้ 2 ส่วนเท่ากัน" },
      { description: "ทำขนมชั้นที่เป็นส่วนสีส้ม โดยใช้ชาไทยผสมกับน้ำร้อน เริ่มจากต้มน้ำให้ร้อนแล้วเทใส่ถ้วยตวงปริมาณ 200 ml กับซองชาไทย 1 ซอง ปริมาณ 20 กรัม ผสมให้เข้ากัน ตักไป 3 ช้อนโต๊ะแล้วนำไปใส่ในส่วนของกะทิที่แยกไว้ก่อนหน้า" },
      { description: "นำทิชชู่จุ่มกับน้ำมันทาภาชนะที่จะนำเข้าไมโครเวฟให้ทั่วเพื่อกันการติด จากนั้นนำภาชนะเปล่าเข้าไมโครเวฟก่อน 1 นาที ด้วยไฟกลางค่อนสูง" },
      { description: "นำส่วนสีส้มลงไปในภาชนะประมาณ 10 ช้อน แล้วไมโครเวฟด้วยไฟกลางค่อนสูง เป็นเวลา 1.30 นาที" },
      { description: "นำส่วนสีขาวใส่ในภาชนะประมาณ 10 ช้อน แล้วไมโครเวฟด้วยไฟกลางค่อนสูง เป็นเวลา 1.30 นาที ทำซ้ำแบบนี้อีก 2 รอบ" },
      { description: "พักขนมไว้ให้เย็น จากนั้นม้วนเป็นโรลแล้วหั่นให้เห็นเป็นชั้นสวยงาม" },
    ],    
    tools: [
      { name: "ไมโครเวฟ" },
      { name: "ช้อนตวง" },
      { name: "แก้วตวง ขนาด 600 ml." },
      { name: "ถาดอุ่นไมโครเวฟ + ฝา" },
      { name: "กล่องทนความร้อน (สำหรับใส่ขนมชั้น)" },
    ],     
  },
  {
    foodName: "โยเกิร์ตบาร์",
    slug: "yogurtbar",
    ingredients: [
      { name: "กรีกโยเกิร์ต ตราโยลิดา", amount: "1 กระปุก", cost: 59 },
      { name: "น้ำผึ้ง", amount: "1 ช้อนโต๊ะ", cost: 42 },
      { name: "สตรอว์เบอร์รี", amount: "3 ลูก", cost: 60 },
      { name: "ส้ม", amount: "1 ลูก", cost: 18.25 },
    ],
    steps: [
      { description: "นำถาดภาชนะมาเตรียมไว้ด้วยกระดาษไข" },
      { description: "นำโยเกิร์ตเทลงไปให้พอดีภาชนะ" },
      { description: "ตกแต่งด้วยสตรอว์เบอร์รี่และส้มที่หั่นเตรียมเอาไว้" },
      { description: "สุดท้ายนำไปแช่ไวในตู้เย็นประมาณ 1-2 ชั่วโมง" },
      { description: "นำออกมาตัดแบ่งให้สวยงาม" },
    ],
    
    tools: [
      { name: "ตู้เย็น" },
      { name: "ถาดภาชนะ" },
      { name: "กระดาษไข/กระดาษรองอาหาร" },
    ],    
  }
]

// RecipePage Component
export default function RecipePage() {
  // Find the recipe based on the `foodid` parameter

  const params = useParams<{ foodid: string }>();
  const { foodid } = params;

  console.log('params', params);

  const recipe = recipesData.find(r => r.slug === foodid);

  if (!recipe) {
    console.log('Recipe not found', foodid)
    return <div>Recipe not found {foodid}</div>
  }

  const { foodName, ingredients, steps, tools } = recipe;
  const totalCost = ingredients.reduce((sum, ingredient) => sum + ingredient.cost, 0);

  return (
    <div className="bg-gradient-to-l from-[#f5dde0] to-[#eabec3] min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">{foodName} Recipe</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div className="relative h-64 sm:h-256 lg:h-auto">
            <Image
              src={`/${foodid}23.jpg`}
              alt={foodName}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
          <Card>
            <CardHeader>
              <CardTitle>You only need</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-4">
                {tools.map((tool: Tool, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    {tool.name === 'ไมโครเวฟ' && <Microwave size={24} />}
                    {tool.name === 'ตู้เย็น' && <Refrigerator size={24} />}
                    {tool.name === 'Utensils' && <Utensils size={24} />}
                    {!['ไมโครเวฟ', 'ตู้เย็น', 'Utensils'].includes(tool.name) && (
        <Circle size={24} /> // Replace DefaultIcon with your fallback icon
      )}
                    <span>{tool.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </div>

        <Card className='mb-12'>
          <CardHeader>
            <CardTitle>Ingredients</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {ingredients.map((ingredient: Ingredient, index: number) => (
                <li key={index} className="flex justify-between">
                  <span>{ingredient.name}</span>
                  <span className="text-gray-600">{ingredient.amount}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Preparation Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-8">
              {steps.map((step: Step, index: number) => (
                <li key={index} className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <p className="mb-2">{step.description}</p>
                    {step.image && (
                      <Image
                        src={step.image}
                        alt={`Step ${index + 1}`}
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md w-full md:w-2/3 h-auto"
                      />
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estimated Cost Breakdown</CardTitle>
            <p className="text-sm text-gray-600">หมายเหตุ: เป็นการคำนวณตามราคาที่ซื้อจริง ไม่ใช่คำนวณตามอัตราส่วน</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4">
              {ingredients.map((ingredient: Ingredient, index: number) => (
                <li key={index} className="flex justify-between">
                  <span>{ingredient.name}</span>
                  <span>฿{ingredient.cost.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="border-t pt-4">
              <p className="text-lg mb-2">Total estimated cost of ingredients:</p>
              <p className="text-3xl font-bold">฿{totalCost.toFixed(2)}</p>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Note: Prices may vary depending on your location and the specific brands you choose.
            </p>
          </CardContent>
        </Card>
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© Aphrodicez. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <div className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </div>
          <div className="text-xs hover:underline underline-offset-4">
            Privacy
          </div>
        </nav>
      </footer>
    </div>
  )
}
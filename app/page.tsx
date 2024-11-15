'use client'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import MenuCarousel from '@/components/MenuCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import React from 'react'

// import '@/app/css/base.css'
// import '@/app/css/sandbox.css'
import '@/app/css/embla.css'
import Navbar from '@/components/Navbar'
import TestimonialSlider from '@/components/TestimonialSlider'
import Link from 'next/link'
import Image from 'next/image'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 3
const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());

<MenuCarousel slides={SLIDES} options={OPTIONS} />

const MAINTANANCE: boolean = false;

export default function Home() {
  return (
    MAINTANANCE ? (
      <div>
        <h1 className="text-4xl font-bold text-center mt-20">Site is under maintanance</h1>
      </div>
    )
    : 
    (
    <div className="bg-gradient-to-l from-[#f5dde0] to-[#eabec3] min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-3 md:py-6 lg:py-12">
          <div className="container px-4 md:px-6 max-w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
                  Have a look at our recipes
                </h2>
                <p className="text-muted-foreground md:text-xl mb-4">
                รวมสูตรขนมทำง่าย ใช้อุปกรณ์แค่ไมโครเวฟกับตู้เย็น เหมาะสำหรับเด็กหอหรือคนที่อยากทำขนมแบบไม่ยุ่งยาก อร่อยได้ง่าย ๆ ทุกวัน!
                </p>
                <Link href="#recipes" className="scroll-smooth">
                  <Button size="lg">Explore Recipes</Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <Image
                  src="/homeimage.jpg"
                  alt="Delicious pasta dish"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-6 md:py-12 lg:py-24 bg-muted" id = "recipes">
          <div className="container px-4 md:px-6 max-w-full">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">
              Featured Recipes
            </h2>
            <div className="bg-background p-6 rounded-lg mb-8">
            <MenuCarousel slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
        </section>

        <section className="w-full py-3 md:py-6 lg:py-12">
          <div className="container px-4 md:px-6 max-w-full">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">
              What Our Users Say
            </h2>
            <div className="bg-muted p-6 rounded-lg">
            <TestimonialSlider />
            </div>
          </div>
        </section>
      </main>
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
  );
}
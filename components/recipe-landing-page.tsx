'use client'

import Image from "next/image"
import Link from "next/link"
import { UtensilsCrossed } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function RecipeLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <UtensilsCrossed className="h-6 w-6 mr-2" />
          <span className="text-lg font-semibold">Tasty Recipes</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Recipes
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
                  Have a look at our recipes
                </h2>
                <p className="text-muted-foreground md:text-xl mb-4">
                  Discover a world of culinary delights with our handpicked selection of mouthwatering recipes. From quick and easy weeknight dinners to impressive dishes for special occasions, we've got something for every taste and skill level.
                </p>
                <Button size="lg">Explore Recipes</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Delicious pasta dish"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Fresh salad"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Grilled steak"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Decadent dessert"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
        <Separator className="my-8" />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">
              Featured Recipes
            </h2>
            <div className="bg-background p-6 rounded-lg mb-8">
              <p className="text-lg text-center">
                [Your Recipe Carousel Component Goes Here]
              </p>
              {/* Replace the above line with your actual Carousel component */}
            </div>
          </div>
        </section>
        <Separator className="my-8" />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">
              What Our Users Say
            </h2>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-lg text-center">
                [Your Review Carousel Component Goes Here]
              </p>
              {/* Replace the above line with your actual Review Carousel component */}
            </div>
          </div>
        </section>
      </main>
      <Separator className="my-8" />
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Tasty Recipes. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
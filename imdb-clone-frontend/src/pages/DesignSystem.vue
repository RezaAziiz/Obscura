<script setup lang="ts">
// Import komponen UI yang mau dites
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge"; // Pastikan sudah install: npx shadcn-vue@latest add badge
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
</script>

<template>
  <div class="p-10 space-y-10 min-h-screen bg-background text-foreground">
    <div>
      <h1 class="text-3xl font-bold">Design System / UI Playground</h1>
      <p class="text-muted-foreground">
        Halaman ini untuk mengecek styling komponen global.
      </p>
    </div>

    <hr class="border-border" />

    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Buttons</h2>
      <div class="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Badges</h2>
      <div class="flex gap-4">
        <Badge variant="default">New</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Error</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Cards</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Ini adalah konten utama card.</p>
          </CardContent>
          <CardFooter>
            <Button class="w-full">Action</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Login Form Preview</CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <Input type="email" placeholder="Email Address" />
            <Input type="password" placeholder="Password" />
          </CardContent>
          <CardFooter>
            <Button variant="outline" class="w-full">Cancel</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  </div>
</template>

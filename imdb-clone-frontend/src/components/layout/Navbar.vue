<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  SlidersHorizontal,
  MessageSquareText,
  Bell,
} from "lucide-vue-next";

import { SidebarTrigger } from "@/components/ui/sidebar";
</script>

<template>
  <header
    class="sticky top-0 z-50 flex h-20 items-center gap-4 border-b bg-background px-6"
  >
    <SidebarTrigger class="md:hidden mr-2" />

    <div class="relative flex-1 md:max-w-md">
      <Search
        class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      />

      <Input
        placeholder="Search anything..."
        class="h-11 w-full rounded-full border-none bg-secondary/50 pl-10 pr-10 focus-visible:ring-1 focus-visible:ring-primary"
      />

      <SlidersHorizontal
        class="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
      />
    </div>

    <div class="ml-auto flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        class="text-muted-foreground hover:text-foreground"
      >
        <MessageSquareText class="h-5 w-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        class="text-muted-foreground hover:text-foreground"
      >
        <Bell class="h-5 w-5" />
        <span
          class="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-600 border border-background"
        ></span>
      </Button>

      <Avatar class="h-9 w-9 cursor-pointer border border-border">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Compass,
  Heart,
  CalendarDays,
  LogOut,
  ChevronDown,
} from "lucide-vue-next";

defineProps<{
  isLoading?: boolean;
}>();

const menuItems = [
  { title: "Browse", icon: Compass, active: true },
  { title: "Watchlist", icon: Heart, active: false },
  { title: "Coming Soon", icon: CalendarDays, active: false },
];

const followingUsers = [
  { name: "Irakli.T", status: "offline" },
  { name: "Anna.S", status: "online" },
  { name: "Vika.J", status: "online" },
];
</script>

<template>
  <Sidebar class="border-r border-border bg-background">
    <SidebarHeader class="h-16 justify-center px-6">
      <div v-if="isLoading" class="flex items-center gap-2">
        <Skeleton class="h-6 w-6 rounded-md" />
        <Skeleton class="h-5 w-24 rounded-md" />
      </div>
      <div v-else class="flex items-center gap-0 font-bold text-xl">
        <span class="text-primary">GALL</span>
        <span class="text-foreground">IUM</span>
      </div>
    </SidebarHeader>

    <SidebarContent
      class="px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <SidebarGroup>
        <SidebarGroupLabel class="text-muted-foreground mb-2"
          >News Feed</SidebarGroupLabel
        >
        <SidebarGroupContent>
          <SidebarMenu>
            <template v-if="isLoading">
              <SidebarMenuItem v-for="i in 3" :key="i" class="mb-2">
                <div class="flex items-center gap-3 px-2 py-2">
                  <Skeleton class="h-4 w-4 rounded-full" />
                  <Skeleton class="h-4 w-full rounded-md" />
                </div>
              </SidebarMenuItem>
            </template>

            <template v-else>
              <SidebarMenuItem
                v-for="item in menuItems"
                :key="item.title"
                class="mb-1"
              >
                <SidebarMenuButton
                  as-child
                  :isActive="item.active"
                  class="transition-all hover:text-primary data-[active=true]:text-primary data-[active=true]:font-bold"
                >
                  <a href="#">
                    <component :is="item.icon" class="mr-2 h-4 w-4" />
                    <span>{{ item.title }}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </template>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarSeparator class="mx-2 my-2" />

      <SidebarGroup>
        <SidebarGroupLabel class="text-muted-foreground mb-2"
          >Following</SidebarGroupLabel
        >
        <SidebarGroupContent>
          <SidebarMenu>
            <template v-if="isLoading">
              <SidebarMenuItem v-for="i in 3" :key="i" class="mb-3">
                <div class="flex items-center gap-3 px-2">
                  <Skeleton class="h-8 w-8 rounded-full" />
                  <Skeleton class="h-3 w-20 rounded-md" />
                </div>
              </SidebarMenuItem>
            </template>

            <template v-else>
              <SidebarMenuItem
                v-for="user in followingUsers"
                :key="user.name"
                class="mb-2"
              >
                <SidebarMenuButton class="h-auto py-2">
                  <div class="flex items-center gap-3 w-full">
                    <Avatar class="h-8 w-8">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <span class="text-sm font-medium">{{ user.name }}</span>
                    <div
                      :class="[
                        'ml-auto h-2 w-2 rounded-full',
                        user.status === 'online'
                          ? 'bg-green-500'
                          : 'bg-gray-500',
                      ]"
                    />
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem class="mt-4 mb-4">
                <SidebarMenuButton
                  class="h-auto py-2 group hover:bg-transparent"
                >
                  <div class="flex items-center gap-3 w-full cursor-pointer">
                    <div
                      class="flex h-5 w-5 items-center justify-center rounded-full bg-primary transition-transform group-hover:scale-110"
                    >
                      <ChevronDown class="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span
                      class="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors"
                      >Load more</span
                    >
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </template>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>

    <SidebarFooter class="p-4">
      <SidebarSeparator class="mb-4" />

      <div v-if="isLoading">
        <Skeleton class="h-10 w-full rounded-md" />
      </div>
      <SidebarMenuButton
        v-else
        class="text-muted-foreground hover:text-destructive"
      >
        <LogOut class="mr-2 h-4 w-4" />
        <span>Log Out</span>
      </SidebarMenuButton>
    </SidebarFooter>

    <SidebarRail />
  </Sidebar>
</template>

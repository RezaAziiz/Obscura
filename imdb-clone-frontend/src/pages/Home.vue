<script setup lang="ts">
import { ref, onMounted } from "vue";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

// Import Layout Components
import Sidebar from "@/components/layout/Sidebar.vue";
import Navbar from "@/components/layout/Navbar.vue";

// State untuk simulasi loading Sidebar
const isLoading = ref(true);

onMounted(() => {
  // Loading selama 2 detik untuk melihat efek skeleton di Sidebar
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<template>
  <SidebarProvider>
    <Sidebar :is-loading="isLoading" />

    <SidebarInset
      class="bg-background flex flex-col min-h-screen overflow-hidden"
    >
      <Navbar />

      <main class="flex-1 p-6">
        <div
          class="flex h-full items-center justify-center border-2 border-dashed border-muted rounded-lg"
        >
          <p class="text-muted-foreground">
            Konten Film akan muncul di sini nanti...
          </p>
        </div>
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>

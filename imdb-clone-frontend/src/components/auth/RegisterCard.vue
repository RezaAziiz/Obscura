<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const emit = defineEmits(["toggle-mode"]);
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Sign Up</CardTitle>
      <CardDescription>
        Enter your email below to Sign Up to your account
      </CardDescription>
      <CardAction>
        <Button variant="link" @click="emit('toggle-mode')"> Log in </Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <form>
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="Username">Username</Label>
            <Input id="username" type="username" placeholder="theo_james_fan" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a href="#" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex flex-col gap-2">
      <Button class="w-full"> Register </Button>
      <Button variant="outline" class="w-full"> Sign Up with Google </Button>
    </CardFooter>
  </Card>
</template>

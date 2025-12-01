import React from 'react'
import { Github, Facebook, Instagram } from "lucide-react";
import devPic from "../assets/DevPic.png"

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-100 p-6">
      <div className="bg-base-300 rounded-3xl shadow-2xl p-10 max-w-md text-center border border-base-200 hover:scale-105 transition-all duration-300 hover:shadow-orange-500/40">
        
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={devPic}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-xl"
          />
        </div>

        {/* Name */}
        <h2 className="text-3xl font-semibold text-primary tracking-wide">
          Md. Ali Hasan
        </h2>

        <p className="text-base mt-1 text-base-200/80">
          Mern Stack Web Developer • UI/UX Lover
        </p>

        {/* Divider */}
        <div className="my-6 border-b border-base-200/40"></div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/alihasna32"
            target="_blank"
            className="p-3 rounded-xl bg-base-100 shadow-md border border-base-200 hover:bg-primary hover:text-black transition-all"
          >
            <Github className="w-7 h-7" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/md.ali.hasan.164567"
            target="_blank"
            className="p-3 rounded-xl bg-base-100 shadow-md border border-base-200 hover:bg-primary hover:text-black transition-all"
          >
            <Facebook className="w-7 h-7" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/md_ali_hasan121/"
            target="_blank"
            className="p-3 rounded-xl bg-base-100 shadow-md border border-base-200 hover:bg-primary hover:text-black transition-all"
          >
            <Instagram className="w-7 h-7" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-sm text-base-200/60">
          Feel free to connect with the developer!
        </p>
      </div>
    </div>
  )
}

export default Contact
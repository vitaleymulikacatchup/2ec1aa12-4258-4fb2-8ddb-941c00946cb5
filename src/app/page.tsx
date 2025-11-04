"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Heart, BookOpen, Leaf, Users, ChefHat, UtensilsCrossed, MessageSquare, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Vista"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Italian Dining Experience"
          description="Experience the true taste of Italy with our traditional recipes, fresh ingredients, and warm hospitality in the heart of the city"
          tag="Since 1985"
          tagIcon={Award}
          buttons={[
            { text: "View Menu", href: "products" },
            { text: "Reserve Table", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant Italian restaurant interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Italian Heritage"
          description="From our family to yours, we bring authentic Italian flavors and traditions to every dish we serve"
          tag="Our Story"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Traditional Recipes",
              description: "Passed down through generations of Italian chefs",
              icon: BookOpen
            },
            {
              title: "Fresh Ingredients",
              description: "Sourced daily from local markets and Italian imports",
              icon: Leaf
            },
            {
              title: "Family Atmosphere",
              description: "Warm hospitality that makes you feel at home",
              icon: Users
            }
          ]}
          buttons={[
            { text: "Our Story", href: "#" },
            { text: "Meet the Chef", href: "#" }
          ]}
          imageSrc="https://images.pexels.com/photos/34565210/pexels-photo-34565210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Traditional Italian pasta preparation"
          imagePosition="right"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Signature Specialties"
          description="Discover our most beloved dishes, crafted with passion and authentic Italian techniques"
          tag="Chef's Favorites"
          tagIcon={ChefHat}
          features={[
            {
              id: "01",
              title: "Homemade Pasta",
              description: "Fresh pasta made daily with traditional Italian methods and the finest semolina",
              imageSrc: "https://images.pexels.com/photos/34565210/pexels-photo-34565210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh homemade Italian pasta"
            },
            {
              id: "02",
              title: "Wood-Fired Pizza",
              description: "Authentic Neapolitan pizza baked in our traditional wood-fired oven",
              imageSrc: "https://images.pexels.com/photos/34380267/pexels-photo-34380267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Wood-fired pizza from traditional oven"
            },
            {
              id: "03",
              title: "Risotto Specialties",
              description: "Creamy risotto prepared with Arborio rice and seasonal Italian ingredients",
              imageSrc: "https://images.pexels.com/photos/11190139/pexels-photo-11190139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Creamy Italian risotto dish"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Menu"
          description="Explore our carefully curated selection of traditional Italian dishes made with authentic recipes"
          tag="Daily Fresh"
          tagIcon={UtensilsCrossed}
          products={[
            {
              id: "1",
              name: "Pasta Carbonara",
              price: "$18",
              imageSrc: "https://images.pexels.com/photos/5710181/pexels-photo-5710181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pasta Carbonara with pancetta and pecorino",
              onProductClick: () => console.log('Carbonara selected')
            },
            {
              id: "2",
              name: "Pizza Margherita",
              price: "$16",
              imageSrc: "https://images.pexels.com/photos/13985154/pexels-photo-13985154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional Margherita pizza",
              onProductClick: () => console.log('Margherita selected')
            },
            {
              id: "3",
              name: "Tiramisu",
              price: "$12",
              imageSrc: "https://images.pexels.com/photos/30372662/pexels-photo-30372662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional Italian tiramisu dessert",
              onProductClick: () => console.log('Tiramisu selected')
            },
            {
              id: "4",
              name: "Osso Buco",
              price: "$28",
              imageSrc: "https://images.pexels.com/photos/34581436/pexels-photo-34581436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Braised veal osso buco with risotto",
              onProductClick: () => console.log('Osso Buco selected')
            }
          ]}
          buttons={[
            { text: "Full Menu", href: "#" },
            { text: "Order Online", href: "#" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Read reviews from our valued customers who have experienced authentic Italian dining with us"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Maria",
              handle: "@maria_foodie",
              testimonial: "The best Italian food outside of Italy! The pasta carbonara tastes exactly like my nonna used to make. Absolutely perfect!",
              imageSrc: "https://images.pexels.com/photos/4350101/pexels-photo-4350101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Happy customer Maria"
            },
            {
              id: "2",
              name: "Giuseppe",
              handle: "@giuseppe_reviews",
              testimonial: "Finally found an authentic Italian restaurant! The wood-fired pizza and warm atmosphere make this place special. Highly recommended!",
              imageSrc: "https://images.pexels.com/photos/6969962/pexels-photo-6969962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Satisfied customer Giuseppe"
            },
            {
              id: "3",
              name: "Sofia",
              handle: "@sofia_dines",
              testimonial: "The tiramisu is heavenly and the service is exceptional. This restaurant truly captures the spirit of Italian hospitality.",
              imageSrc: "https://images.pexels.com/photos/14812895/pexels-photo-14812895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Happy family dining"
            },
            {
              id: "4",
              name: "Marco",
              handle: "@marco_eats",
              testimonial: "Incredible osso buco and the wine selection is outstanding. Perfect for a romantic dinner or family celebration.",
              imageSrc: "https://images.pexels.com/photos/6248896/pexels-photo-6248896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Couple enjoying dinner"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Table"
          description="Book your dining experience with us. We look forward to welcoming you to our Italian family."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "date", type: "date", placeholder: "Preferred Date", required: true },
            { name: "guests", type: "number", placeholder: "Number of Guests", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or dietary requirements...",
            rows: 4,
            required: false
          }}
          buttonText="Reserve Table"
          onSubmit={(data) => console.log('Reservation submitted:', data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Bella Vista"
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Menu", href: "products" },
                { label: "Reservations", href: "contact" },
                { label: "Private Events", href: "#" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "Hours", href: "#" },
                { label: "Location", href: "#" },
                { label: "Catering", href: "#" },
                { label: "Gift Cards", href: "#" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Phone: (555) 123-4567", href: "#" },
                { label: "Email: info@bellavista.com", href: "#" },
                { label: "123 Italian Way", href: "#" },
                { label: "City, State 12345", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/bellavistaitalian",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/bellavistaitalian",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/bellavistaitalian",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
          copyrightText="© 2025 Bella Vista Italian Restaurant. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
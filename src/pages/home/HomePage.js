import { Search } from './Search';
import { Hero } from './Hero';
import { Catalog } from './Catalog';
import { FeatureProducts } from './FeatureProducts';
import { AboutUs } from './AboutUs';
import { Subscription } from './Subscription';
import { ContactUs } from './ContactUs';
export function HomePage() {
  document.title = "Audio Visual Distributors"
  return (
    <div>
      <Search/>
     <Hero/>
     <Catalog/>
     <FeatureProducts/>
     <AboutUs/>
     <Subscription/>
     <ContactUs/>
    </div>
  )
}

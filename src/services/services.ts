export interface Service {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  services: Service[];
  image: string;
}

export const categories: Category[] = [
  {
    id: 'honey-wax',
    name: 'Honey Wax',
    image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000',
    services: [
      { id: 'hw1', name: 'Full Body', price: 870, originalPrice: 1249, description: 'Complete body honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw2', name: 'Full Arms Full Leg Under Arms', price: 540, originalPrice: 799, description: 'Complete waxing package.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw3', name: 'Full Arms Half Leg Under Arms', price: 449, originalPrice: 649, description: 'Essential waxing combo.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw4', name: 'Full Arms Under Arms', price: 336, originalPrice: 499, description: 'Arms and underarms waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw5', name: 'Full Legs', price: 349, originalPrice: 499, description: 'Full legs honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw6', name: 'Full Arms', price: 299, originalPrice: 449, description: 'Full arms honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw7', name: 'Half Legs', price: 219, originalPrice: 349, description: 'Half legs honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw8', name: 'Half Arms', price: 239, originalPrice: 349, description: 'Half arms honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw9', name: 'Full Back', price: 330, originalPrice: 499, description: 'Full back honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw10', name: 'Half Back', price: 239, originalPrice: 349, description: 'Half back honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw11', name: 'Stomach', price: 299, originalPrice: 449, description: 'Stomach area honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw12', name: 'Bikini Wax', price: 510, originalPrice: 749, description: 'Gentle honey bikini wax.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw13', name: 'Butt Wax', price: 399, originalPrice: 599, description: 'Honey waxing for butt area.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw14', name: 'Breast Wax', price: 249, originalPrice: 399, description: 'Honey waxing for breast area.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw15', name: 'Full Face', price: 249, originalPrice: 399, description: 'Full face honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw16', name: 'Neck', price: 349, originalPrice: 499, description: 'Neck honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw17', name: 'Under Arms', price: 40, originalPrice: 99, description: 'Underarms honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw18', name: 'Side Lock', price: 30, originalPrice: 79, description: 'Side lock area honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw19', name: 'Lower Lips', price: 30, originalPrice: 79, description: 'Lower lips honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw20', name: 'Upper Lips', price: 30, originalPrice: 79, description: 'Upper lip honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw21', name: 'Chin', price: 30, originalPrice: 79, description: 'Chin honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'hw22', name: 'Forehead', price: 30, originalPrice: 79, description: 'Forehead honey waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
    ]
  },
  {
    id: 'rica-wax',
    name: 'Rica Wax',
    image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000',
    services: [
      { id: 'rw1', name: 'Full Arms Full Leg Under Arms', price: 899, originalPrice: 1299, description: 'Premium Rica waxing package.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw2', name: 'Full Arms Half Leg Under Arms', price: 799, originalPrice: 1149, description: 'Essential Rica waxing combo.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw3', name: 'Full Arms Under Arms', price: 499, originalPrice: 749, description: 'Rica waxing for arms and underarms.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw4', name: 'Full Legs', price: 499, originalPrice: 749, description: 'Full legs Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw5', name: 'Full Body', price: 1699, originalPrice: 2399, description: 'Complete body Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw21', name: 'Full Arms', price: 425, originalPrice: 599, description: 'Full arms Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw6', name: 'Half Legs', price: 349, originalPrice: 499, description: 'Half legs Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw22', name: 'Half Arms', price: 365, originalPrice: 519, description: 'Half arms Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw8', name: 'Full Back', price: 455, originalPrice: 649, description: 'Full back Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw9', name: 'Half Back', price: 295, originalPrice: 449, description: 'Half back Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw7', name: 'Stomach', price: 350, originalPrice: 499, description: 'Stomach Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw10', name: 'Bikni Wax', price: 699, originalPrice: 999, description: 'Premium Rica bikini wax.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw11', name: 'Butt Wax', price: 519, originalPrice: 749, description: 'Rica waxing for butt area.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw12', name: 'Breast Wax', price: 308, originalPrice: 449, description: 'Rica waxing for breast area.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw17', name: 'Full Face', price: 349, originalPrice: 499, description: 'Full face Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw16', name: 'Neck', price: 459, originalPrice: 649, description: 'Neck Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw20', name: 'Under Arms', price: 70, originalPrice: 129, description: 'Underarms Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw19', name: 'Side Lock', price: 50, originalPrice: 99, description: 'Side lock area Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw18', name: 'Lower Lips', price: 50, originalPrice: 99, description: 'Lower lips Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw13', name: 'Upper Lips', price: 50, originalPrice: 99, description: 'Upper lip Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw14', name: 'Chin', price: 50, originalPrice: 99, description: 'Chin Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
      { id: 'rw15', name: 'Forehead', price: 50, originalPrice: 99, description: 'Forehead Rica waxing.', image: 'https://drive.google.com/thumbnail?id=1ORyxkIP6d6vCUcV0mzAZHKTSXtDs_sEl&sz=w1000' },
    ]
  },
  {
    id: 'facial',
    name: 'Facial',
    image: 'https://drive.google.com/thumbnail?id=1myPMNvTnGCFqHqG2hChA1IDd-kAa9vpN&sz=w1000',
    services: [
      { id: 'f1', name: 'Classic Facial', price: 615, originalPrice: 899, description: 'A deep cleansing facial for a refreshed look.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'f2', name: 'Lotus Pearl', price: 675, originalPrice: 999, description: 'Pearl-infused facial for a radiant glow.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'f3', name: 'Lotus Gold', price: 740, originalPrice: 1299, description: 'Luxury gold facial for special occasions.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'f4', name: 'FYC D-Tan facial', price: 689, originalPrice: 1289, description: 'Removes tan and brightens skin tone.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'f5', name: 'FYC Redwine Facial', price: 689, originalPrice: 1289, description: 'Anti-aging facial with red wine extracts.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'f6', name: 'FYC Vitamin-C Facial', price: 840, originalPrice: 1349, description: 'Antioxidant-rich facial for skin repair.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'f7', name: 'FYC Korean Facial', price: 1399, originalPrice: 2000, description: 'Deep hydration Korean facial.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'f8', name: 'O3+ Shine & Glow', price: 1089, originalPrice: 2500, description: 'O3+ treatment for instant brightness.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'f9', name: 'O3+ Stay Young Facial', price: 1049, originalPrice: 2400, description: 'Anti-aging treatment for youthful skin.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'f10', name: 'O3+ Bridal Facial', price: 1485, originalPrice: 5000, description: 'The ultimate bridal glow treatment.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'f11', name: 'Kanpeki Korean Facial', price: 1390, originalPrice: 2600, description: 'Premium Kanpeki Korean treatment.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'f12', name: 'Kanpeki Fruit Facial', price: 1460, originalPrice: 2800, description: 'Natural fruit extracts for skin health.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'f13', name: 'Kanpeki Dermasyl Blanch Facial', price: 1899, originalPrice: 5000, description: 'Specialized dermatological facial.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
    ]
  },
  {
    id: 'cleanup',
    name: 'Cleanup',
    image: 'https://drive.google.com/thumbnail?id=1myPMNvTnGCFqHqG2hChA1IDd-kAa9vpN&sz=w1000',
    services: [
      { id: 'c1', name: 'Fruit Cleanup', price: 499, originalPrice: 699, description: 'Refreshing fruit-based cleanup.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'c2', name: 'D-Tan Cleanup', price: 499, originalPrice: 699, description: 'Effective de-tanning cleanup.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'c3', name: 'Brightning Cleanup', price: 499, originalPrice: 749, description: 'Skin brightening treatment.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'c4', name: 'O3+ Power Cleanup', price: 749, originalPrice: 899, description: 'Deep cleaning O3+ power cleanup.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'c5', name: 'O3+ D-Tan Cleanup', price: 749, originalPrice: 899, description: 'O3+ de-tanning cleanup.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
      { id: 'c6', name: 'FYC Hydra Boost Cleanup', price: 1499, originalPrice: 2299, description: 'Intense hydration cleanup.', image: 'https://drive.google.com/thumbnail?id=1cosxfxIvGL8wSCdRq7CSdeVmzAC8dwDz&sz=w1000' },
    ]
  },
  {
    id: 'meni-pedi',
    name: 'Meni Pedi',
    image: 'https://drive.google.com/thumbnail?id=1VK9BUaJBw4HjMU6AgQPufNaTL-6u75jN&sz=w1000',
    services: [
      { id: 'mp1', name: 'Classic Menicure', price: 410, originalPrice: 599, description: 'Basic nail care for hands.', image: 'https://drive.google.com/thumbnail?id=1VK9BUaJBw4HjMU6AgQPufNaTL-6u75jN&sz=w1000' },
      { id: 'mp2', name: 'Classic Pedicure', price: 530, originalPrice: 749, description: 'Basic nail care for feet.', image: 'https://drive.google.com/thumbnail?id=1VK9BUaJBw4HjMU6AgQPufNaTL-6u75jN&sz=w1000' },
      { id: 'mp3', name: 'Meni-Pedi Classic', price: 770, originalPrice: 1099, description: 'Combined classic hand and foot care.', image: 'https://drive.google.com/thumbnail?id=1VK9BUaJBw4HjMU6AgQPufNaTL-6u75jN&sz=w1000' },
      { id: 'mp4', name: 'Sara Pedicure', price: 560, originalPrice: 799, description: 'Premium Sara pedicure.', image: 'https://drive.google.com/thumbnail?id=1VK9BUaJBw4HjMU6AgQPufNaTL-6u75jN&sz=w1000' },
      { id: 'mp5', name: 'Sara Menicure', price: 440, originalPrice: 649, description: 'Premium Sara manicure.', image: 'https://drive.google.com/thumbnail?id=1VK9BUaJBw4HjMU6AgQPufNaTL-6u75jN&sz=w1000' },
      { id: 'mp6', name: 'Sara Meni-Pedi', price: 799, originalPrice: 1149, description: 'Premium Sara hand and foot care.', image: 'https://drive.google.com/thumbnail?id=1VK9BUaJBw4HjMU6AgQPufNaTL-6u75jN&sz=w1000' },
      { id: 'mp7', name: 'O3 Menicure', price: 530, originalPrice: 749, description: 'O3+ brightening manicure.', image: 'https://drive.google.com/thumbnail?id=1VK9BUaJBw4HjMU6AgQPufNaTL-6u75jN&sz=w1000' },
      { id: 'mp8', name: 'O3 Pedicure', price: 650, originalPrice: 899, description: 'O3+ brightening pedicure.', image: 'https://drive.google.com/thumbnail?id=1VK9BUaJBw4HjMU6AgQPufNaTL-6u75jN&sz=w1000' },
      { id: 'mp9', name: 'O3 Meni-Pedi', price: 1180, originalPrice: 1649, description: 'O3+ hand and foot treatment.', image: 'https://drive.google.com/thumbnail?id=1VK9BUaJBw4HjMU6AgQPufNaTL-6u75jN&sz=w1000' },
    ]
  },
  {
    id: 'bleach',
    name: 'Bleach',
    image: 'https://drive.google.com/thumbnail?id=1hQF71qnW8Rs_4PIsSULje1rZnuh0RIO2&sz=w1000',
    services: [
      { id: 'b1', name: 'Face & Neck', price: 235, originalPrice: 349, description: 'Standard face and neck bleach.', image: 'https://drive.google.com/thumbnail?id=1hQF71qnW8Rs_4PIsSULje1rZnuh0RIO2&sz=w1000' },
      { id: 'b2', name: 'Full Body Bleach', price: 655, originalPrice: 949, description: 'Complete body bleaching.', image: 'https://drive.google.com/thumbnail?id=1hQF71qnW8Rs_4PIsSULje1rZnuh0RIO2&sz=w1000' },
      { id: 'b3', name: 'D-Tan', price: 289, originalPrice: 399, description: 'Effective de-tanning treatment.', image: 'https://drive.google.com/thumbnail?id=1hQF71qnW8Rs_4PIsSULje1rZnuh0RIO2&sz=w1000' },
    ]
  },
  {
    id: 'body-polishing',
    name: 'Body Polishing',
    image: 'https://drive.google.com/thumbnail?id=12kz48JAU0AuEsYqqXoLqy7d2fOykG857&sz=w1000',
    services: [
      { id: 'bp1', name: 'Rime Herbal', price: 840, originalPrice: 1199, description: 'Herbal body polishing.', image: 'https://drive.google.com/thumbnail?id=12kz48JAU0AuEsYqqXoLqy7d2fOykG857&sz=w1000' },
      { id: 'bp2', name: 'Val Avromer', price: 1619, originalPrice: 2299, description: 'Premium body polishing treatment.', image: 'https://drive.google.com/thumbnail?id=12kz48JAU0AuEsYqqXoLqy7d2fOykG857&sz=w1000' },
      { id: 'bp3', name: 'Real Aroma', price: 1515, originalPrice: 2149, description: 'Aromatic body polishing.', image: 'https://drive.google.com/thumbnail?id=12kz48JAU0AuEsYqqXoLqy7d2fOykG857&sz=w1000' },
    ]
  },
  {
    id: 'body-massage',
    name: 'Body Massage',
    image: 'https://drive.google.com/thumbnail?id=1X9m-JvtdDHJdmoSKWMVqobRTvFpl4PIN&sz=w1000',
    services: [
      { id: 'bm1', name: 'Full Body Massage', price: 799, originalPrice: 1149, description: 'Relaxing full body massage.', image: 'https://drive.google.com/thumbnail?id=1X9m-JvtdDHJdmoSKWMVqobRTvFpl4PIN&sz=w1000' },
      { id: 'bm2', name: 'Body + Head', price: 999, originalPrice: 1399, description: 'Full body and head massage combo.', image: 'https://drive.google.com/thumbnail?id=1X9m-JvtdDHJdmoSKWMVqobRTvFpl4PIN&sz=w1000' },
    ]
  },
  {
    id: 'hair-spa',
    name: 'Hair Spa',
    image: 'https://drive.google.com/thumbnail?id=18-eRZcdo89PmUhNhScSNI2S0QoF4zGhT&sz=w1000',
    services: [
      { id: 'hs1', name: 'Loreal Hair Spa', price: 659, originalPrice: 949, description: 'Professional Loreal hair treatment.', image: 'https://drive.google.com/thumbnail?id=18-eRZcdo89PmUhNhScSNI2S0QoF4zGhT&sz=w1000' },
    ]
  },
  {
    id: 'hair-colour',
    name: 'Hair Colour',
    image: 'https://drive.google.com/thumbnail?id=13i3nCpyWsRH0lqrwSo649ZPhzKugwtsD&sz=w1000',
    services: [
      { id: 'hc1', name: 'Hair Colour', price: 835, originalPrice: 1199, description: 'Standard hair coloring service.', image: 'https://drive.google.com/thumbnail?id=13i3nCpyWsRH0lqrwSo649ZPhzKugwtsD&sz=w1000' },
      { id: 'hc2', name: 'Hair Colour with Customer Product', price: 299, originalPrice: 449, description: 'Application service for your own product.', image: 'https://drive.google.com/thumbnail?id=13i3nCpyWsRH0lqrwSo649ZPhzKugwtsD&sz=w1000' },
    ]
  },
  {
    id: 'hair-cut',
    name: 'Hair Cut',
    image: 'https://drive.google.com/thumbnail?id=18-eRZcdo89PmUhNhScSNI2S0QoF4zGhT&sz=w1000',
    services: [
      { id: 'hct1', name: 'Normal Haircut', price: 250, originalPrice: 399, description: 'Standard professional haircut.', image: 'https://drive.google.com/thumbnail?id=18-eRZcdo89PmUhNhScSNI2S0QoF4zGhT&sz=w1000' },
      { id: 'hct2', name: 'Advance Haircut', price: 350, originalPrice: 499, description: 'Stylized advanced haircut.', image: 'https://drive.google.com/thumbnail?id=18-eRZcdo89PmUhNhScSNI2S0QoF4zGhT&sz=w1000' },
    ]
  },
  {
    id: 'makeup',
    name: 'Makeup',
    image: 'https://drive.google.com/thumbnail?id=1YNJxDeBakxUOfWk4TdmswRBePUcJjJEC&sz=w1000',
    services: [
      { 
        id: 'mu1', 
        name: 'Party Makeup', 
        price: 1499, 
        originalPrice: 2499,
        description: 'Includes: Basic Hairstyle - Straightening, Blow Dry, Curls, Crimping, Saree Draping', 
        image: 'https://drive.google.com/thumbnail?id=1YNJxDeBakxUOfWk4TdmswRBePUcJjJEC&sz=w1000' 
      },
      { 
        id: 'mu2', 
        name: 'HD Party Makeup', 
        price: 2499, 
        originalPrice: 3999,
        description: 'Includes: Messy Bun, Messy Brait, Torg Bun, Fish Tail Braid, Stuffing Bun, Bengali Style, Freestyle Hairdo & Saree Draping', 
        image: 'https://drive.google.com/thumbnail?id=1YNJxDeBakxUOfWk4TdmswRBePUcJjJEC&sz=w1000' 
      },
      { 
        id: 'mu3', 
        name: 'Celebrity Party Makeup', 
        price: 3499, 
        originalPrice: 5499,
        description: 'Includes: Normal Hair Extensions, Fancy Hairdo & Saree Draping', 
        image: 'https://drive.google.com/thumbnail?id=1YNJxDeBakxUOfWk4TdmswRBePUcJjJEC&sz=w1000' 
      },
      { 
        id: 'mu4', 
        name: 'HD Engagement Makeup', 
        price: 3499, 
        originalPrice: 5999,
        description: 'Professional HD makeup for your special engagement day.', 
        image: 'https://drive.google.com/thumbnail?id=1YNJxDeBakxUOfWk4TdmswRBePUcJjJEC&sz=w1000' 
      },
      { 
        id: 'mu5', 
        name: 'Celebrity Engagement Makeup', 
        price: 4999, 
        originalPrice: 7999,
        description: 'Elite celebrity-style makeup for engagement.', 
        image: 'https://drive.google.com/thumbnail?id=1YNJxDeBakxUOfWk4TdmswRBePUcJjJEC&sz=w1000' 
      },
      { 
        id: 'mu6', 
        name: 'Celebrity Reception Makeup', 
        price: 4999, 
        originalPrice: 7999,
        description: 'Stunning celebrity-style makeup for wedding reception.', 
        image: 'https://drive.google.com/thumbnail?id=1YNJxDeBakxUOfWk4TdmswRBePUcJjJEC&sz=w1000' 
      },
      { 
        id: 'mu7', 
        name: 'HD Bridal Makeup', 
        price: 6999, 
        originalPrice: 11999,
        description: 'High-definition bridal makeup for a perfect wedding look.', 
        image: 'https://drive.google.com/thumbnail?id=1YNJxDeBakxUOfWk4TdmswRBePUcJjJEC&sz=w1000' 
      },
      { 
        id: 'mu8', 
        name: 'Celebrity Bridal Makeup', 
        price: 9999, 
        originalPrice: 15999,
        description: 'The ultimate celebrity bridal transformation.', 
        image: 'https://drive.google.com/thumbnail?id=1YNJxDeBakxUOfWk4TdmswRBePUcJjJEC&sz=w1000' 
      },
    ]
  }
];


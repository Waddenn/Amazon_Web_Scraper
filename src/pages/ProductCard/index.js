// pages/index.js
import React from 'react';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/Home.module.css';

const products = [
    {
      "rank": "#1",
      "title": "REDimpact Spray Anti Agression de Poche Gel 40 ML - Taille Standard - Format : Sac a Main Femme, Manteau Femme, Sacoche Homme, Veste, Sac a Dos",
      "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/71twbu4qqrL._AC_UL600_SR600,400_.jpg",
      "url": "https://www.amazon.fr/SAFE-DEFENSE-Spray-Anti-Agresi%C3%B3n-REDimpact/dp/B07NLKZS8K/ref=zg_bs_g_sports_d_sccl_1/259-9636044-3493531?psc=1",
      "price": "19,95 €"
    },
    {
      "rank": "#2",
      "title": "Vikaster Gourde Sport, 500 ML Bouteille d'eau, sans BPA, Étanche & Réutilisable, avec Filtre et Marqueur de Temps, Convient pour en Plein Air",
      "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/61D1Dcpxa1L._AC_UL600_SR600,400_.jpg",
      "url": "https://www.amazon.fr/Bouteille-R%C3%A9utilisable-Marqueur-Convient-randonn%C3%A9e/dp/B0B2LXS2JW/ref=zg_bs_g_sports_d_sccl_2/259-9636044-3493531?psc=1",
      "price": "12,95 €"
    },
    {
      "rank": "#3",
      "title": "TRESKO Tapis d'exercice Fitness Tapis de Yoga Tapis de Pilates Tapis de Gymnastique, Dimensions 185 x 60 x 1,5 cm ou et 190 x 100 x 1,5 cm, sans Phtalates/en Mousse NBR/respecte la Peau",
      "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/81bNidbIlML._AC_UL600_SR600,400_.jpg",
      "url": "https://www.amazon.fr/TRESKO-dexercice-gymnastique-Dimensions-%C3%A9paisseurs/dp/B01M7QSHTN/ref=zg_bs_g_sports_d_sccl_3/259-9636044-3493531?psc=1",
      "price": "23,81 €"
    },
    {
      "rank": "#4",
      "title": "bigzzia Tapis Roulant Elettrico Pieghevole,Walking Pad 10 km/h,Tappeto Corsa Extra Large 42CM,Con telecomando e Display LCD,Telaio rinforzato and 265LB Max Weight for Home Office Exercise",
      "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/51gWkXLOLGL._AC_UL600_SR600,400_.jpg",
      "url": "https://www.amazon.fr/Elettrico-Pieghevole-telecomando-rinforzato-Exercise/dp/B0BN5WZPSR/ref=zg_bs_g_sports_d_sccl_4/259-9636044-3493531?psc=1",
      "price": "179,99 €"
    },
    {
      "rank": "#5",
      "title": "Blukar Lampe Frontale Rechargeable, Super Lumineux Léger Torche Frontale LED Puissante avec Voyant Rouge,8 Modes d'Éclairage,Capteur Mouvement,IPX5 Étanche,30H d'autonomie pour Camping/Pêche/Urgence",
      "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/71cEdbO4RdL._AC_UL600_SR600,400_.jpg",
      "url": "https://www.amazon.fr/Blukar-Rechargeable-Puissante-d%C3%89clairage-dautonomie/dp/B0CBPHGWJ2/ref=zg_bs_g_sports_d_sccl_5/259-9636044-3493531?psc=1",
      "price": "15,99 €"
    },
    {
      "rank": "#6",
      "title": "Super Sparrow Bouteille d'eau - Gourde - 350ml/500ml/750ml/1000ml/1L - sans BPA - Convient pour Le Sport, la randonnée, l'école, Le Bureau, en Plein air",
      "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/71BLXMy1exL._AC_UL600_SR600,400_.jpg",
      "url": "https://www.amazon.fr/Super-Sparrow-Bouteille-deau-500ml-17oz/dp/B07BJG2XKZ/ref=zg_bs_g_sports_d_sccl_6/259-9636044-3493531?psc=1",
      "price": "12,69 €"
    },
    {
      "rank": "#7",
      "title": "Gritin Bande Élastique Fitness, [Lot de 5] Bande de Résistance Élastique en Latex Équipement d'Exercices pour Musculation Pilates Yoga -5 Niveaux de Force-avec Sac de Rangement",
      "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/617NmwvU4tL._AC_UL600_SR600,400_.jpg",
      "url": "https://www.amazon.fr/Gritin-R%C3%A9sistance-%C3%89quipement-dExercices-Musculation/dp/B07L9WLKZQ/ref=zg_bs_g_sports_d_sccl_7/259-9636044-3493531?psc=1",
      "price": "9,92 €"
    },
    {
      "rank": "#8",
      "title": "Corde à Sauter, Blukar Speed Jump Rope Réglable pour Enfant & Adulte, Roulements à Billes en Acier, Poignées Antidérapantes en Mousse, Câble en Acier pour Fitness, Crossfit, Sport, Boxe, GYM -2.8M",
      "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/71N3qN+-xeL._AC_UL600_SR600,400_.jpg",
      "url": "https://www.amazon.fr/Blukar-R%C3%A9glable-Roulements-Poign%C3%A9es-Antid%C3%A9rapantes/dp/B08CRVG7BB/ref=zg_bs_g_sports_d_sccl_8/259-9636044-3493531?psc=1",
      "price": "9,99 €"
    },
    {
      "rank": "#9",
      "title": "KTEBO Lunettes de Ski Hommes Femmes, OTG - Anti-Buée Masque de Ski Protection UV400 Lunettes de Snowboard, Compatible avec Casque pour Lunette Ski Snowboard Autres Sports Hiver",
      "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/71Re8sI24jL._AC_UL600_SR600,400_.jpg",
      "url": "https://www.amazon.fr/KTEBO-Lunettes-Ski-Hommes-Femmes/dp/B0CFD23MZP/ref=zg_bs_g_sports_d_sccl_9/259-9636044-3493531?psc=1",
      "price": "9,92 €"
    },
    {
      "rank": "#10",
      "title": "CITYSPORTS Tapis de Course,Tapis Roulant Pliable 12 km/h,avec Affichage LED,APP et 360° Tablet Holder,Walking Pad Compact pour la Maison et Le Bureau(Black&Red)",
      "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/71Mui-ia5fL._AC_UL600_SR600,400_.jpg",
      "url": "https://www.amazon.fr/CITYSPORTS-Roulant-Pliable-Affichage-Walking/dp/B0C6KTPFGB/ref=zg_bs_g_sports_d_sccl_10/259-9636044-3493531?psc=1",
      "price": "217,55 €"
    }
  ];

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Products</h1>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
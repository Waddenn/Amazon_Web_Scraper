import { useRouter } from "next/router"

const ProductDetail = () => {
  const router = useRouter()
  const { asin } = router.query

  const imageUrl = `https://charts.camelcamelcamel.com/fr/${asin}/amazon.png?force=1&zero=0&w=1166&h=601&desired=false&legend=1&ilt=1&tp=all&fo=0&lang=en`

  return (
    <div>
      <h1>Détail du Produit</h1>
      <img src={imageUrl} alt="Historique des prix" />
    </div>
  )
}

export default ProductDetail

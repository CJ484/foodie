import Image from "next/image";
import { Circles } from "react-loader-spinner";
import { toast } from "react-toastify";
import styles from "../../assets/styles/components/foodCard.module.scss";
const FoodCard = ({ data }: any) => {
  const notify = () => toast('Added to Favorites!');
  const addToFavorites = (id: number) => {
    notify();
  };

  return (
    <div
      onClick={() => addToFavorites(data.id)}
      aria-label={data.id}
      className={styles.foodCard}
    >
      {data.image ? (
        <Image
          width={600}
          height={600}
          className={styles.foodCard__image}
          src={data.image}
          alt={`Food Image for ${data.title}`}
        />
      ) : (
        <Circles wrapperClass={styles.foodCard__image} />
      )}
      <div className={styles.foodCard__content}>
        <h1 className={styles.foodCard__title}>{data.title}</h1>
      </div>
    </div>
  );
};

export default FoodCard;

import Image from "next/image";
import { toast } from "react-toastify";
import styles from "../../../assets/styles/components/foodCard.module.scss";
const FoodCard = ({ data, setModalOpen }: any) => {
  const notify = () => toast('Modal Open!');
  const openPopup = (id: number) => {
    setModalOpen(true);
    notify();
  };

  return (
    <div
      onClick={() => openPopup(data.id)}
      aria-label={`Food id: ${data.id}`}
      className={styles.foodCard}
    >
        <Image
          width={600}
          height={600}
          className={styles.foodCard__image}
          src={data.image}
          alt={`Food Image for ${data.title}`}
        />
      <div className={styles.foodCard__content}>
        <h1 className={styles.foodCard__title}>{data.title}</h1>
      </div>
    </div>
  );
};

export default FoodCard;

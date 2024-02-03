import Image from "next/image";
import {Circles} from 'react-loader-spinner';
import styles from "../../assets/styles/components/foodCard.module.scss";
const FoodCard = (data: any) => {
  return (
    <div className={styles.foodCard}>
        {/* {data ? <Circles /> : <Image src={data.image} alt="Food Image" />} */}
      <Circles wrapperClass={styles.foodCard__image}/>
      <div className={styles.foodCard__content}>
        <h1 className={styles.foodCard__title}>title</h1>
        <p className={styles.foodCard__description}>description</p>
      </div>
    </div>
  );
};

export default FoodCard;
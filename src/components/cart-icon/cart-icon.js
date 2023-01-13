import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-card.svg";

export default function CartIcon() {
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

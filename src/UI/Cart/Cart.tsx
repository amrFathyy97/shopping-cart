import "./cart.css";
import { useState } from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartTable from "./CartTable";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid ${theme.palette.background.paper}`,
    color: "white",
  },
}));

export default function Cart({ items }: { items: number }) {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCart = () => {
    setIsOpen((prev) => (prev ? false : true));
    console.log(isOpen);
  };

  return (
    <>
    <CartTable isOpen={isOpen}/>
      <IconButton onClick={handleCart} aria-label="cart">
        <StyledBadge badgeContent={items} color="secondary">
          <ShoppingCartIcon className="cart-svg" />
        </StyledBadge>
      </IconButton>
    </>
  );
}

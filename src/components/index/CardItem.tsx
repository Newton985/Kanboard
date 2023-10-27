import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

const CardItem = (props: any) => {
  const { card } = props;

  const [{ opacity }, dragRef] = useDrag(() => ({
    item: card,
    type: "Card",
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  return (
    <div ref={dragRef}>
      <Typography
        sx={{
          padding: 1,
          border: "1px solid #edeaea",
          marginBottom: 2,
          borderRadius: 1,
          backgroundColor: "#f2f2f2",
        }}
      >
        {card?.name}
      </Typography>
    </div>
  );
};

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardItem;

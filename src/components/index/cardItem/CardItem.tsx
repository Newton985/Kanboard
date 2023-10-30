import { IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { Delete } from "@mui/icons-material";

import Styles from "./CardItem.module.css";
import ModalDialog from "@/components/ui/ModalDialog";
import { useState } from "react";
import { useMutation } from "@apollo/client";

import DELETE_CARD from "@/graphql/mutations/DeleteTask.gql";

const CardItem = (props: any) => {
  const { card, refetchColumns } = props;

  const [deleteCardDalogOpen, setDeleteCardDialogOpen] = useState(false);

  const [deleteCardMutation] = useMutation(DELETE_CARD, {
    onCompleted: () => refetchColumns(),
  });

  // Make Card draggable
  const [{ opacity }, dragRef] = useDrag(() => ({
    item: card,
    type: "Card",
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  return (
    <>
      <div ref={dragRef} className={Styles.Container}>
        <Typography>{card?.name}</Typography>
        <IconButton
          className={Styles.DeleteIcon}
          onClick={() => {
            setDeleteCardDialogOpen(true);
          }}
        >
          <Delete color="error" />
        </IconButton>
      </div>

      <ModalDialog
        message={`Delete Task: ${card?.name}`}
        title="Delete Card?"
        open={deleteCardDalogOpen}
        onConfirm={() => {
          deleteCardMutation({
            variables: {
              taskId: card.id,
            },
          });
        }}
        onClose={() => setDeleteCardDialogOpen(false)}
      />
    </>
  );
};

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
  refetchColumns: PropTypes.func.isRequired,
};

export default CardItem;

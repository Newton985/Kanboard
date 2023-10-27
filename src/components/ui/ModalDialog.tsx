import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import PropTypes from "prop-types";
import { forwardRef } from "react";

/**
 * Reusable modal with slide effect
 * Can be used for Dialog with two actions
 *  TODO //
 * Make modal accept custom text for Cancel and Confirm Buttons
 * Make modal take extra(custom) actions
 * Make dialog take custom styling - eg a red button for a delete action
 */

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalDialog = (props: any) => {
  const { title, message, onClose, onConfirm, open } = props;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={onConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ModalDialog.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ModalDialog;

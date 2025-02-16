import { useEffect, useRef } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type Props = {
  variant: "buy" | "rent" | "delete";
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

const Modal = (props: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const buyText = "Are you sure you want to buy this product?";
  const deleteText = "Are you sure you want to delete this product?";
  const rentText = "Rental period";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        props.onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.onClose]);

  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray/50">
      <div ref={modalRef} className="bg-white px-5 pt-8 pb-4 shadow-lg">
        <p className="text-xl">
          {props.variant === "buy"
            ? buyText
            : props.variant === "rent"
            ? rentText
            : deleteText}
        </p>

        {props.variant === "rent" && (
          <div className="mt-6 flex items-center gap-4">
            <div className="flex flex-col">
              <label>From</label>
              <Input type="datetime-local" />
            </div>
            <div className="flex flex-col">
              <label>To</label>
              <Input type="datetime-local" />
            </div>
          </div>
        )}
        <div className="flex items-center justify-end gap-4 mt-12">
          <Button variant="button-secondary" onClick={props.onConfirm}>
            {props.variant === "rent" ? "Go back" : "No"}
          </Button>
          <Button variant="button-primary" onClick={props.onClose}>
            {props.variant === "rent" ? "Confirm rent" : "Yes"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

export interface IAddRoverProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (data: { plateau: string; startingPosition: string; movement: string }) => void;
}

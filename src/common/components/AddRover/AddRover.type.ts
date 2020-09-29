export interface IAddRoverProps {
  isVisible: boolean;
  onConfirm: (data: { plateau: string; startingPosition: string; movement: string }) => void;
}

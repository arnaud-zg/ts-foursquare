declare namespace NStore {
  interface IState {
    life: NLife.IState
    status: NStatus.IState
    venues: NVenues.IState
  }
}

import {
  TransferEvent as TransferEventEvent,
  changeNameEvent as changeNameEventEvent
} from "../generated/Transfer/Transfer"
import { TransferEvent, changeNameEvent } from "../generated/schema"

export function handleTransferEvent(event: TransferEventEvent): void {
  let entity = new TransferEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlechangeNameEvent(event: changeNameEventEvent): void {
  let entity = new changeNameEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

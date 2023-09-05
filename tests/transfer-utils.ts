import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { TransferEvent, changeNameEvent } from "../generated/Transfer/Transfer"

export function createTransferEventEvent(
  from: Address,
  to: Address,
  amount: BigInt
): TransferEvent {
  let transferEventEvent = changetype<TransferEvent>(newMockEvent())

  transferEventEvent.parameters = new Array()

  transferEventEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEventEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEventEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transferEventEvent
}

export function createchangeNameEventEvent(name: string): changeNameEvent {
  let changeNameEventEvent = changetype<changeNameEvent>(newMockEvent())

  changeNameEventEvent.parameters = new Array()

  changeNameEventEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return changeNameEventEvent
}

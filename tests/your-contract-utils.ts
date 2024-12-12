import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { CertificateIssued } from "../generated/YourContract/YourContract"

export function createCertificateIssuedEvent(
  student: Address,
  data: string,
  grade: string
): CertificateIssued {
  let certificateIssuedEvent = changetype<CertificateIssued>(newMockEvent())

  certificateIssuedEvent.parameters = new Array()

  certificateIssuedEvent.parameters.push(
    new ethereum.EventParam("student", ethereum.Value.fromAddress(student))
  )
  certificateIssuedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromString(data))
  )
  certificateIssuedEvent.parameters.push(
    new ethereum.EventParam("grade", ethereum.Value.fromString(grade))
  )

  return certificateIssuedEvent
}

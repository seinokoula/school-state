import { CertificateIssued as CertificateIssuedEvent } from "../generated/YourContract/YourContract"
import { CertificateIssued } from "../generated/schema"

export function handleCertificateIssued(event: CertificateIssuedEvent): void {
  let entity = new CertificateIssued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.student = event.params.student
  entity.data = event.params.data
  entity.grade = event.params.grade

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

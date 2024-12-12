import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { CertificateIssued } from "../generated/schema"
import { CertificateIssued as CertificateIssuedEvent } from "../generated/YourContract/YourContract"
import { handleCertificateIssued } from "../src/your-contract"
import { createCertificateIssuedEvent } from "./your-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let student = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let data = "Example string value"
    let grade = "Example string value"
    let newCertificateIssuedEvent = createCertificateIssuedEvent(
      student,
      data,
      grade
    )
    handleCertificateIssued(newCertificateIssuedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CertificateIssued created and stored", () => {
    assert.entityCount("CertificateIssued", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CertificateIssued",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "student",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CertificateIssued",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "data",
      "Example string value"
    )
    assert.fieldEquals(
      "CertificateIssued",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "grade",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

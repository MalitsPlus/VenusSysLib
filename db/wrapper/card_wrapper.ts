import { AttributeType } from "../../types/proto/proto_enum";
import { Card } from "../../types/proto/proto_master";
import { WapCard } from "../../types/wap/card_waps";
import { getRawCard } from "../dao/card_dao";
import { getSkill } from "../repository/skill_repository";

export const getWapCard = (
  id: string,
): WapCard | undefined => {
  const original = getRawCard(id)
  if (!original) return undefined
  return {
    ...original,
    attributeType: getCardAttribute(original),
    skill1: getSkill(original.skillId1)!, // FIXME: potential error
    skill2: getSkill(original.skillId2)!, // FIXME: potential error
    skill3: getSkill(original.skillId3)!, // FIXME: potential error
  }
}

function getCardAttribute(
  card: Pick<
    Card,
    'vocalRatioPermil' | 'danceRatioPermil' | 'visualRatioPermil'
  >
): AttributeType {
  const { vocalRatioPermil, danceRatioPermil, visualRatioPermil } = card
  if (
    vocalRatioPermil > danceRatioPermil &&
    vocalRatioPermil > visualRatioPermil
  ) {
    return AttributeType.Vocal
  }
  if (
    danceRatioPermil > vocalRatioPermil &&
    danceRatioPermil > visualRatioPermil
  ) {
    return AttributeType.Dance
  }
  if (
    visualRatioPermil > vocalRatioPermil &&
    visualRatioPermil > danceRatioPermil
  ) {
    return AttributeType.Visual
  }
  return AttributeType.Unknown
}

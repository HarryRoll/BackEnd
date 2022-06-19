import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router()

router.get('/',indexCtrl.locCtrl.findAll)
router.get('/:id',indexCtrl.locCtrl.findOne)
router.post('/',indexCtrl.locCtrl.create)
router.put('/:id',indexCtrl.locCtrl.update)
router.delete('/:id',indexCtrl.locCtrl.deleted)
router.get('/sql/:id',indexCtrl.locCtrl.querySQL)
export default router
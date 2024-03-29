import RepositoryInterface from "../../@shared/repository.interface";
import Product from "../entity/product";

export default interface ProductRepositoryInterface
  extends RepositoryInterface<Product> {
  findByName(name: string): Promise<Product>;
}
